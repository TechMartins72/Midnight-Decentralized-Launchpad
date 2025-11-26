import type {
  Ledger,
  UserPrivateState,
} from "./managed/statera-launchpad/contract/index.cjs";
import {
  WitnessContext,
} from "@midnight-ntwrk/compact-runtime";

export type StateraLaunchpadPrivateState = {
  readonly secretKey: Uint8Array;
  readonly saleMetadata: UserPrivateState[];
};

const witnesses = {
  local_secret_key: ({
    privateState,
  }: WitnessContext<Ledger, StateraLaunchpadPrivateState>) => {
    return [privateState, privateState.secretKey];
  },
  generate_sale_id: ({
    privateState,
  }: WitnessContext<Ledger, StateraLaunchpadPrivateState>) => {
    const newBytes = new Uint8Array(32);
    crypto.getRandomValues(newBytes);
    return [privateState, newBytes];
  },
  get_current_time: ({
    privateState,
  }: WitnessContext<Ledger, StateraLaunchpadPrivateState>) => {
    return [privateState, BigInt(Date.now())];
  },
  calculateTotalAllocation: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    ratio: bigint,
    price_slope: bigint,
    contribution: bigint,
    token_sold: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    if (price_slope === 0n) {
      const allocation = contribution / ratio;
      return [privateState, allocation];
    }
    const new_ratio = token_sold * price_slope;
    const allocation = contribution / new_ratio;
    return [privateState, allocation];
  },
  update_user_private_state: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    salePrivateData: UserPrivateState,
    saleId: Uint8Array
  ) => {
    const updatedPrivateState = {
      ...privateState,
      saleMetadata: [
        privateState.saleMetadata.map((saleData) => saleData.saleId !== saleId),
        salePrivateData,
      ],
    };
    return [updatedPrivateState, []];
  },
  get_user_private_state_hash: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    saleId: Uint8Array
  ): [StateraLaunchpadPrivateState, UserPrivateState] => {
    const saleData = privateState.saleMetadata.find(
      (data) => data.saleId === saleId
    );
    return [privateState, saleData!];
  },
  remove_sale_from_private_state: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    saleId: Uint8Array
  ): [StateraLaunchpadPrivateState, []] => {
    const updatedPrivateState = {
      ...privateState,
      saleMetadata: [
        ...privateState.saleMetadata.filter(
          (saleData) => saleData.saleId !== saleId
        ),
      ],
    };
    return [updatedPrivateState, []];
  },
  calculate_vest_claim_percentage_per_day: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    vesting_duration: bigint,
    tge_allocation_percentage: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    const milliseconds_a_day = 1000 * 60 * 60 * 24;
    const vestDays = vesting_duration / BigInt(milliseconds_a_day);
    const vestTotalPercentage = 100n - tge_allocation_percentage;
    const percentage = vestTotalPercentage / vestDays;
    return [privateState, percentage];
  },
  calculate_total_vest_claim: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    claim_per_day_percentage: bigint,
    cliff_period: bigint,
    total_allocation: bigint,
    claimed_amount: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    const time_now = BigInt(Date.now());
    const milliseconds_a_day = BigInt(1000 * 60 * 60 * 24);
    const vestDays = (time_now - cliff_period) / milliseconds_a_day;
    const percentage = claim_per_day_percentage * vestDays;
    const totalVestedAmount = (percentage * total_allocation) / 100n;

    const claimableAmount =
      totalVestedAmount > claimed_amount
        ? totalVestedAmount - claimed_amount
        : 0n;

    return [privateState, claimableAmount];
  },
  calculate_claim_amount: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    percentage: bigint,
    total_allocation: bigint
  ): [StateraLaunchpadPrivateState, BigInt] => {
    const claimAmount = (percentage / 100n) * total_allocation;
    return [privateState, claimAmount];
  },
};
