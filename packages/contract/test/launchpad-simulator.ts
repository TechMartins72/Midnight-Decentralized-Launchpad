import {
  type CircuitContext,
  QueryContext,
  sampleContractAddress,
  constructorContext,
  type CoinPublicKey,
} from "@midnight-ntwrk/compact-runtime";
import {
  Contract,
  type Ledger,
  ledger,
  CoinInfo,
} from "../src/managed/statera-launchpad/contract/index.cjs";
import {
  type StateraLaunchpadPrivateState,
  witnesses,
} from "../src/witnesses.js";
import { toHex, fromHex, isHex } from "@midnight-ntwrk/midnight-js-utils";
import { sampleCoinPublicKey, sampleTokenType } from "@midnight-ntwrk/zswap";
import { createCoinInfo, encodeCoinInfo } from "@midnight-ntwrk/ledger";
import { TextEncoder } from "util";
import { randomBytes } from "./utils.js";

export class LaunchpadSimulator {
  readonly contract: Contract<StateraLaunchpadPrivateState>;
  public baseContext: CircuitContext<StateraLaunchpadPrivateState>;

  constructor(privateState: StateraLaunchpadPrivateState) {
    this.contract = new Contract<StateraLaunchpadPrivateState>(witnesses);
    const {
      currentPrivateState,
      currentContractState,
      currentZswapLocalState,
    } = this.contract.initialState(
      constructorContext(privateState, this.createPublicKey("super-admin")),
      { bytes: randomBytes(32) },
      this.stringToBytes(sampleCoinPublicKey()).bytes
    );
    this.baseContext = {
      currentPrivateState,
      currentZswapLocalState,
      originalState: currentContractState,
      transactionContext: new QueryContext(
        currentContractState.data,
        sampleContractAddress()
      ),
    };
  }

  public getLedger(): Ledger {
    return ledger(this.baseContext.transactionContext.state);
  }

  public getPrivateState(): StateraLaunchpadPrivateState {
    return this.baseContext.currentPrivateState;
  }

  public coin(amount: number): CoinInfo {
    return encodeCoinInfo(createCoinInfo(this.coinType, BigInt(amount)));
  }

  public coinType = sampleTokenType();

  public createToken(amount: bigint): void {
    const result = this.contract.impureCircuits.createYourToken(
      this.baseContext,
      randomBytes(32),
      amount
    );
    this.baseContext = result.context;
  }

  public joinAllowedList(userId: CoinPublicKey): void {
    const result = this.contract.impureCircuits.joinAllowedList(
      this.baseContext,
      this.stringToBytes(userId).bytes
    );
    this.baseContext = result.context;
  }

  public createTokenSale(
    start_price: bigint,
    total_amount: bigint,
    exchange_token: Uint8Array,
    end_time: bigint,
    min: bigint,
    max: bigint,
    infoCID: Uint8Array,
    price_slope: bigint,
    isPrivate: boolean,
    cliff_period: bigint,
    tge_period: bigint,
    tge_allocation_percentage: bigint,
    vesting_duration: bigint
  ): void {
    const saleData = [
      start_price,
      total_amount,
      exchange_token,
      end_time,
      min,
      max,
      infoCID,
      price_slope,
      isPrivate,
      cliff_period,
      tge_period,
      tge_allocation_percentage,
      vesting_duration,
    ] as const;

    const result = this.contract.impureCircuits.createSale(
      this.baseContext,
      ...saleData
    );
    this.baseContext = result.context;
  }

  public receiveToken(amount: number): void {
    const result = this.contract.impureCircuits.receiveSaleToken(
      this.baseContext,
      this.coin(amount)
    );
    this.baseContext = result.context;
  }

  public fundSale(coin: CoinInfo, sale_id: bigint): void {
    const result = this.contract.impureCircuits.fundSale(
      this.baseContext,
      coin,
      sale_id
    );
    this.baseContext = result.context;
  }

  public refund(sale_id: bigint, refundAmount: bigint): void {
    const result = this.contract.impureCircuits.refund(
      this.baseContext,
      sale_id,
      refundAmount
    );
    this.baseContext = result.context;
  }

  public claimTokens(sale_id: bigint): void {
    const result = this.contract.impureCircuits.claimTokens(
      this.baseContext,
      sale_id
    );
    this.baseContext = result.context;
  }

  public createPublicKey(userName: string): CoinPublicKey {
    const encoded = new TextEncoder().encode(userName);
    const hexChars: string[] = [];

    for (let i = 0; i < 32; i++) {
      const byte =
        i < encoded.length
          ? encoded[i]
          : (userName.charCodeAt(i % userName.length) + i) % 256;
      hexChars.push(byte.toString(16).padStart(2, "0"));
    }

    return hexChars.join("") as CoinPublicKey;
  }

  public stringToBytes(str: string): { bytes: Uint8Array } {
    const encoded = new TextEncoder().encode(str);
    const bytes = new Uint8Array(32);
    bytes.set(encoded.slice(0, 32));
    return { bytes };
  }

  public publicKeyToBytes(publicKey: CoinPublicKey): { bytes: Uint8Array } {
    if (isHex(publicKey)) {
      const bytes = fromHex(publicKey.padStart(64, "0"));
      const result = new Uint8Array(32);
      result.set(bytes.slice(0, 32));
      return { bytes: result };
    }
    return this.stringToBytes(publicKey);
  }

  public bytesToPublicKey(bytesObj: { bytes: Uint8Array }): CoinPublicKey {
    return toHex(bytesObj.bytes) as CoinPublicKey;
  }
}
