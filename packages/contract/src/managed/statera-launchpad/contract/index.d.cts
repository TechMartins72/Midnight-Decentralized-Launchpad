import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type SaleInfo = { target: bigint;
                         startTime: bigint;
                         endTime: bigint;
                         totalTokenAmount: bigint;
                         totalTokenSold: bigint;
                         saleInfoCID: Uint8Array;
                         amountRaised: bigint;
                         acceptableExchangeToken: Uint8Array;
                         hasEnded: boolean;
                         min: bigint;
                         max: bigint;
                         participants: bigint;
                         organizer: Uint8Array;
                         hasWithdrawn: boolean;
                         exchangeRatio: bigint;
                         saleType: Sale;
                         slope: bigint
                       };

export enum Sale { Public = 0, Private = 1 }

export type FundingInfo = { privateStateHash: Uint8Array; claimed: boolean };

export type UserPrivateState = { saleId: Uint8Array;
                                 contribution: bigint;
                                 totalAllocation: bigint;
                                 claimedAllocation: bigint
                               };

export type Witnesses<T> = {
  local_secret_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  generate_sale_id(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  get_current_time(context: __compactRuntime.WitnessContext<Ledger, T>): [T, bigint];
  calculateAllocation(context: __compactRuntime.WitnessContext<Ledger, T>,
                      ratio_0: bigint,
                      priceSlope_0: bigint,
                      contribution_0: bigint,
                      tokenSold_0: bigint): [T, bigint];
  update_user_private_state(context: __compactRuntime.WitnessContext<Ledger, T>,
                            newPrivateState_0: UserPrivateState): [T, []];
  get_user_private_state_hash(context: __compactRuntime.WitnessContext<Ledger, T>,
                              saleId_0: Uint8Array): [T, UserPrivateState];
  remove_sale_from_private_state(context: __compactRuntime.WitnessContext<Ledger, T>,
                                 saleId_0: Uint8Array): [T, []];
}

export type ImpureCircuits<T> = {
  createToken(context: __compactRuntime.CircuitContext<T>,
              domain_sep_0: Uint8Array,
              total_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  createSale(context: __compactRuntime.CircuitContext<T>,
             start_price_0: bigint,
             total_amount_0: bigint,
             total_amount_sold_0: bigint,
             exchange_token_0: Uint8Array,
             end_time_0: bigint,
             min_0: bigint,
             max_0: bigint,
             infoCID_0: Uint8Array,
             price_slope_0: bigint,
             isPrivate_0: boolean): __compactRuntime.CircuitResults<T, []>;
  fundSale(context: __compactRuntime.CircuitContext<T>,
           coin_0: { nonce: Uint8Array, color: Uint8Array, value: bigint },
           sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  claimTokens(context: __compactRuntime.CircuitContext<T>, sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  refund(context: __compactRuntime.CircuitContext<T>,
         sale_id_0: Uint8Array,
         refundAmount_0: bigint): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
}

export type Circuits<T> = {
  createToken(context: __compactRuntime.CircuitContext<T>,
              domain_sep_0: Uint8Array,
              total_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  createSale(context: __compactRuntime.CircuitContext<T>,
             start_price_0: bigint,
             total_amount_0: bigint,
             total_amount_sold_0: bigint,
             exchange_token_0: Uint8Array,
             end_time_0: bigint,
             min_0: bigint,
             max_0: bigint,
             infoCID_0: Uint8Array,
             price_slope_0: bigint,
             isPrivate_0: boolean): __compactRuntime.CircuitResults<T, []>;
  fundSale(context: __compactRuntime.CircuitContext<T>,
           coin_0: { nonce: Uint8Array, color: Uint8Array, value: bigint },
           sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  claimTokens(context: __compactRuntime.CircuitContext<T>, sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  refund(context: __compactRuntime.CircuitContext<T>,
         sale_id_0: Uint8Array,
         refundAmount_0: bigint): __compactRuntime.CircuitResults<T, []>;
}

export type Ledger = {
  readonly TVL: { nonce: Uint8Array,
                  color: Uint8Array,
                  value: bigint,
                  mt_index: bigint
                };
  readonly raisedTokenPool: { nonce: Uint8Array,
                              color: Uint8Array,
                              value: bigint,
                              mt_index: bigint
                            };
  readonly superAdmin: Uint8Array;
  contractSalesInfo: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): SaleInfo;
    [Symbol.iterator](): Iterator<[Uint8Array, SaleInfo]>
  };
  fundingInfo: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): FundingInfo;
    [Symbol.iterator](): Iterator<[Uint8Array, FundingInfo]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>,
               coinPubKey_0: Uint8Array,
               initialNonce_0: Uint8Array): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
