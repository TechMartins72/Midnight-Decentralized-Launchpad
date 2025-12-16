import {
  type CircuitContext,
  QueryContext,
  sampleContractAddress,
  constructorContext,
  type CoinPublicKey,
  EncodedCoinPublicKey,
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
import { nativeToken } from "@midnight-ntwrk/zswap";
import {
  createCoinInfo,
  decodeCoinPublicKey,
  encodeCoinInfo,
  encodeCoinPublicKey,
} from "@midnight-ntwrk/ledger";
import { TextEncoder } from "util";
import { randomBytes } from "./utils.js";

export class LaunchpadSimulator {
  readonly contract: Contract<StateraLaunchpadPrivateState>;
  public baseContext: CircuitContext<StateraLaunchpadPrivateState>;

  constructor(privateState: StateraLaunchpadPrivateState, organiser: string) {
    this.contract = new Contract<StateraLaunchpadPrivateState>(witnesses);
    const {
      currentPrivateState,
      currentContractState,
      currentZswapLocalState,
    } = this.contract.initialState(
      constructorContext(privateState, this.createPublicKey("super-admin")),
      randomBytes(32)
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

  public coin(amount: number, scale_factor: bigint): CoinInfo {
    return encodeCoinInfo(
      createCoinInfo(this.coinType, scale_factor * BigInt(amount))
    );
  }

  public coinType = nativeToken();

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
      this.coinPubKeyToEncodedPubKey(userId).bytes
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
    tge_allocation_percentage: bigint,
    vesting_duration: bigint,
    is_overflow: boolean,
    scale_factor: bigint,
    cliff_period: bigint,
    is_private: boolean,
    organiser: string
  ): void {
    const saleData = [
      start_price,
      total_amount * scale_factor,
      exchange_token,
      end_time,
      min * scale_factor,
      max * scale_factor,
      infoCID,
      price_slope * scale_factor,
      tge_allocation_percentage,
      vesting_duration,
      cliff_period,
      is_overflow,
      is_private,
      this.coinPubKeyToEncodedPubKey(this.createPublicKey(organiser)),
      scale_factor,
    ] as const;

    const result = this.contract.impureCircuits.createSale(
      this.baseContext,
      ...saleData
    );
    this.baseContext = result.context;
  }

  public receiveToken(amount: number, scale_factor: bigint): void {
    const result = this.contract.impureCircuits.receiveSaleToken(
      this.baseContext,
      this.coin(amount, scale_factor)
    );
    this.baseContext = result.context;
  }

  public receiveFundsByOrganizer(saleId: number): void {
    const result = this.contract.impureCircuits.receiveFundsRaised(
      this.baseContext,
      BigInt(saleId)
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

  public refund(sale_id: bigint): void {
    const result = this.contract.impureCircuits.refund(
      this.baseContext,
      sale_id
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

  public cancelSale(sale_id: bigint): void {
    const result = this.contract.impureCircuits.cancelSale(
      this.baseContext,
      sale_id
    );
    this.baseContext = result.context;
  }

  public createPublicKey(str: string): CoinPublicKey {
    const encoded = new TextEncoder().encode(str);
    const hexChars: string[] = [];

    for (let i = 0; i < 32; i++) {
      const byte =
        i < encoded.length
          ? encoded[i]
          : (str.charCodeAt(i % str.length) + i) % 256;
      hexChars.push(byte.toString(16).padStart(2, "0"));
    }

    return hexChars.join("") as CoinPublicKey;
  }

  public coinPubKeyToEncodedPubKey(str: CoinPublicKey): EncodedCoinPublicKey {
    return { bytes: encodeCoinPublicKey(str) };
  }

  public encodedPubKeyToCoinPubKey(
    encodePubKey: EncodedCoinPublicKey
  ): CoinPublicKey {
    return decodeCoinPublicKey(encodePubKey.bytes);
  }
}
