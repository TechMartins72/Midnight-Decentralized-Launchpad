import type {
  Ledger,
  UserPrivateState,
} from "./managed/statera-launchpad/contract/index.cjs";
import { WitnessContext } from "@midnight-ntwrk/compact-runtime";

export type StateraLaunchpadPrivateState = {
  readonly secretKey: Uint8Array;
  // sales metadata should be a readonly value - for testing sake, it will be mutable
  saleMetadata: UserPrivateState[];
};

export const witnesses = {
  local_secret_key: ({
    privateState,
  }: WitnessContext<Ledger, StateraLaunchpadPrivateState>): [
    StateraLaunchpadPrivateState,
    Uint8Array,
  ] => [privateState, privateState.secretKey],
  generate_sale_id: ({
    privateState,
  }: WitnessContext<Ledger, StateraLaunchpadPrivateState>): [
    StateraLaunchpadPrivateState,
    Uint8Array,
  ] => {
    const newBytes = new Uint8Array(32);
    crypto.getRandomValues(newBytes);
    return [privateState, newBytes];
  },
  get_current_time: ({
    privateState,
  }: WitnessContext<Ledger, StateraLaunchpadPrivateState>): [
    StateraLaunchpadPrivateState,
    bigint,
  ] => {
    return [privateState, BigInt(Date.now())];
  },
  calculate_total_allocation: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    ratio: bigint,
    price_slope: bigint,
    contribution: bigint,
    token_sold: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    if (token_sold === 0n) {
      const allocation = contribution / ratio;
      return [privateState, allocation];
    } else {
      if (price_slope === 0n) {
        const allocation = contribution / ratio;
        return [privateState, allocation];
      }
      const new_ratio = token_sold * price_slope + ratio;
      const allocation = contribution / new_ratio;
      return [privateState, allocation];
    }
  },
  calculate_target: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    total_amount_to_sell: bigint,
    price: bigint,
    scale_factor: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    const target = (total_amount_to_sell * price) / scale_factor;
    return [privateState, target];
  },
  recalculateAllocationAndUpdatePrivateState: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    sale_id: bigint,
    contribution: bigint,
    total_contribution: bigint,
    total_token_sold: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    const percentage = (contribution / total_contribution) * 100n;
    const allocation = total_token_sold / percentage;

    const idx = privateState.saleMetadata.findIndex(
      (data) => data.saleId === sale_id
    );
    if (idx !== -1) {
      return [privateState, allocation];
    }
    privateState.saleMetadata[idx].totalAllocation = allocation;
    return [privateState, allocation];
  },
  confirm_sale_in_private_state: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    saleId: bigint
  ): [StateraLaunchpadPrivateState, boolean] => {
    const saleData = privateState.saleMetadata.find(
      (data) => data.saleId === saleId
    );
    const hasContributed: boolean = saleData === undefined ? false : true;
    return [privateState, hasContributed];
  },
  update_user_private_state: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    salePrivateData: UserPrivateState,
    saleId: bigint
  ): [StateraLaunchpadPrivateState, []] => {
    const idx = privateState.saleMetadata.findIndex(
      (data) => data.saleId === saleId
    );
    if (idx !== -1) {
      privateState.saleMetadata[idx] = salePrivateData;
      return [privateState, []];
    } else {
      const newIdx = privateState.saleMetadata.length;
      privateState.saleMetadata[newIdx] = salePrivateData;
      return [privateState, []];
    }
  },
  get_user_private_state_hash: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    saleId: bigint
  ): [StateraLaunchpadPrivateState, UserPrivateState] => {
    const saleData = privateState.saleMetadata.find(
      (data) => data.saleId === saleId
    );
    return [privateState, saleData!];
  },
  remove_sale_from_private_state: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    saleId: bigint
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
  calculate_deduction: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    sale_id: bigint,
    refund_amount: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    const sale = privateState.saleMetadata.find(
      (sale) => sale.saleId === sale_id
    );
    if (refund_amount !== 0n) {
      const price = sale!.contribution / sale!.totalAllocation;
      const allocation_deduction = refund_amount / price;
      return [privateState, allocation_deduction];
    } else {
      return [privateState, 0n];
    }
  },
  calculate_vest_claim_percentage_per_day: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    vesting_duration: bigint,
    tge_allocation_percentage: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    const milliseconds_a_day = 1000 * 60 * 60 * 24;
    const vestDays = vesting_duration / BigInt(milliseconds_a_day);
    const vestTotalPercentage = 100n - tge_allocation_percentage;
    if (vestTotalPercentage == 0n) {
      return [privateState, 0n];
    } else {
      const percentage = vestTotalPercentage / vestDays;
      return [privateState, percentage];
    }
  },
  calculate_total_vest_claim: (
    { privateState }: WitnessContext<Ledger, StateraLaunchpadPrivateState>,
    claim_per_day_percentage: bigint,
    end_time: bigint,
    total_allocation: bigint,
    claimed_amount: bigint
  ): [StateraLaunchpadPrivateState, bigint] => {
    const time_now = BigInt(Date.now());
    const milliseconds_a_day = BigInt(1000 * 60 * 60 * 24);
    const vestDays = (time_now - end_time) / milliseconds_a_day;
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
  ): [StateraLaunchpadPrivateState, bigint] => {
    const claimAmount = (percentage / 100n) * total_allocation;
    return [privateState, claimAmount];
  },
};
