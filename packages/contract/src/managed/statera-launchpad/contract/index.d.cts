import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type SaleInfo = { target: bigint;
                         startTime: bigint;
                         endTime: bigint;
                         totalTokenAmount: bigint;
                         totalTokenSold: bigint;
                         saleInfoCID: Uint8Array;
                         amountRaised: bigint;
                         acceptableExchangeToken: Uint8Array;
                         phase: number;
                         min: bigint;
                         max: bigint;
                         participants: bigint;
                         organiser: { bytes: Uint8Array };
                         hasWithdrawn: boolean;
                         hasEnded: boolean;
                         exchangeRatio: bigint;
                         saleModel: number;
                         saleType: Sale;
                         slope: bigint;
                         tgeAllocationPercentage: bigint;
                         vestingPeriod: bigint;
                         cliffPeriod: bigint;
                         vestClaimPercentagePerDay: bigint;
                         scaleFactor: bigint
                       };

export enum Sale { Public = 0, Private = 1 }

export type FundingInfo = { privateStateHash: Uint8Array; claimComplete: boolean
                          };

export type UserPrivateState = { saleId: bigint;
                                 contribution: bigint;
                                 totalAllocation: bigint;
                                 claimedAllocation: bigint
                               };

export type CoinInfo = { nonce: Uint8Array; color: Uint8Array; value: bigint };

export type Witnesses<T> = {
  local_secret_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  get_current_time(context: __compactRuntime.WitnessContext<Ledger, T>): [T, bigint];
  calculate_total_allocation(context: __compactRuntime.WitnessContext<Ledger, T>,
                             ratio_0: bigint,
                             price_slope_0: bigint,
                             contribution_0: bigint,
                             token_sold_0: bigint): [T, bigint];
  update_user_private_state(context: __compactRuntime.WitnessContext<Ledger, T>,
                            new_private_state_0: UserPrivateState,
                            saleId_0: bigint): [T, []];
  confirm_sale_in_private_state(context: __compactRuntime.WitnessContext<Ledger, T>,
                                saleId_0: bigint): [T, boolean];
  get_user_private_state_hash(context: __compactRuntime.WitnessContext<Ledger, T>,
                              sale_id_0: bigint): [T, UserPrivateState];
  remove_sale_from_private_state(context: __compactRuntime.WitnessContext<Ledger, T>,
                                 sale_id_0: bigint): [T, []];
  calculate_vest_claim_percentage_per_day(context: __compactRuntime.WitnessContext<Ledger, T>,
                                          vesting_duration_0: bigint,
                                          tge_allocation_percentage_0: bigint): [T, bigint];
  calculate_total_vest_claim(context: __compactRuntime.WitnessContext<Ledger, T>,
                             claim_per_day_percentage_0: bigint,
                             end_time_0: bigint,
                             totalAllocation_0: bigint,
                             claimedAllocation_0: bigint): [T, bigint];
  recalculateAllocationAndUpdatePrivateState(context: __compactRuntime.WitnessContext<Ledger, T>,
                                             sale_id_0: bigint,
                                             contribution_0: bigint,
                                             total_contribution_0: bigint,
                                             total_token_sold_0: bigint): [T, bigint];
  calculate_target(context: __compactRuntime.WitnessContext<Ledger, T>,
                   total_amount_to_sell_0: bigint,
                   price_0: bigint,
                   scale_factor_0: bigint): [T, bigint];
}

export type ImpureCircuits<T> = {
  createYourToken(context: __compactRuntime.CircuitContext<T>,
                  domain_sep_0: Uint8Array,
                  total_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  createSale(context: __compactRuntime.CircuitContext<T>,
             price_0: bigint,
             total_amount_to_sell_0: bigint,
             exchange_token_0: Uint8Array,
             sale_end_time_0: bigint,
             min_contribtion_0: bigint,
             max_contribtion_0: bigint,
             infoCID_0: Uint8Array,
             price_slope_0: bigint,
             tge_allocation_percentage_0: bigint,
             vesting_duration_0: bigint,
             cliff_period_0: bigint,
             is_overflow_0: boolean,
             is_private_0: boolean,
             organiser_0: { bytes: Uint8Array },
             scale_factor_0: bigint): __compactRuntime.CircuitResults<T, []>;
  fundSale(context: __compactRuntime.CircuitContext<T>,
           coin_0: CoinInfo,
           sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  refund(context: __compactRuntime.CircuitContext<T>, sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  claimTokens(context: __compactRuntime.CircuitContext<T>, sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  receiveFundsRaised(context: __compactRuntime.CircuitContext<T>,
                     sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  cancelSale(context: __compactRuntime.CircuitContext<T>, sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  joinAllowedList(context: __compactRuntime.CircuitContext<T>,
                  userPk_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  receiveSaleToken(context: __compactRuntime.CircuitContext<T>, coin_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
}

export type Circuits<T> = {
  createYourToken(context: __compactRuntime.CircuitContext<T>,
                  domain_sep_0: Uint8Array,
                  total_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  createSale(context: __compactRuntime.CircuitContext<T>,
             price_0: bigint,
             total_amount_to_sell_0: bigint,
             exchange_token_0: Uint8Array,
             sale_end_time_0: bigint,
             min_contribtion_0: bigint,
             max_contribtion_0: bigint,
             infoCID_0: Uint8Array,
             price_slope_0: bigint,
             tge_allocation_percentage_0: bigint,
             vesting_duration_0: bigint,
             cliff_period_0: bigint,
             is_overflow_0: boolean,
             is_private_0: boolean,
             organiser_0: { bytes: Uint8Array },
             scale_factor_0: bigint): __compactRuntime.CircuitResults<T, []>;
  fundSale(context: __compactRuntime.CircuitContext<T>,
           coin_0: CoinInfo,
           sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  refund(context: __compactRuntime.CircuitContext<T>, sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  claimTokens(context: __compactRuntime.CircuitContext<T>, sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  receiveFundsRaised(context: __compactRuntime.CircuitContext<T>,
                     sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  cancelSale(context: __compactRuntime.CircuitContext<T>, sale_id_0: bigint): __compactRuntime.CircuitResults<T, []>;
  joinAllowedList(context: __compactRuntime.CircuitContext<T>,
                  userPk_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  receiveSaleToken(context: __compactRuntime.CircuitContext<T>, coin_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
}

export type Ledger = {
  readonly TVL: { nonce: Uint8Array,
                  color: Uint8Array,
                  value: bigint,
                  mt_index: bigint
                };
  readonly TokenSold: bigint;
  raisedTokenPools: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { nonce: Uint8Array,
                             color: Uint8Array,
                             value: bigint,
                             mt_index: bigint
                           };
    [Symbol.iterator](): Iterator<[bigint, { nonce: Uint8Array, color: Uint8Array, value: bigint, mt_index: bigint }]>
  };
  readonly superAdmin: Uint8Array;
  allowedUser: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
  contractSalesInfo: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): SaleInfo;
    [Symbol.iterator](): Iterator<[bigint, SaleInfo]>
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
               initialNonce_0: Uint8Array): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
