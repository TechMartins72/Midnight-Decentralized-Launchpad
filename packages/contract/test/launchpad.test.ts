import { describe, it, expect } from "vitest";
import { LaunchpadSimulator } from "./launchpad-simulator.js";
import {
  NetworkId,
  setNetworkId,
} from "@midnight-ntwrk/midnight-js-network-id";
import { randomBytes } from "crypto";
import { daysToMilliseconds } from "./utils.js";
import { encodeTokenType } from "@midnight-ntwrk/ledger";

setNetworkId(NetworkId.Undeployed);

const SCALE_FACTOR = 1_000_000n;

describe("Contract test user activities on public sale", () => {
  const fixedPublicSale = new LaunchpadSimulator(
    {
      secretKey: randomBytes(32),
      saleMetadata: [],
    },
    "peter"
  );

  const peter = fixedPublicSale.createPublicKey("peter");
  const mary = fixedPublicSale.createPublicKey("mary");

  it("Contract test flow for creating, funding, cancelling and receiving refund from a fixed public token sale", () => {
    fixedPublicSale.receiveToken(20000, 1_000_000n);
    expect(fixedPublicSale.getLedger().TVL.value).toBe(20000n * SCALE_FACTOR);
  });

  it("should create new sale", () => {
    expect(fixedPublicSale.getLedger().contractSalesInfo.size()).toBe(0n);
    expect(fixedPublicSale.getLedger().TokenSold).toBe(0n);

    fixedPublicSale.createTokenSale(
      10n, // start price
      5000n, // The total amount of token to be sold in this particular sale
      encodeTokenType(fixedPublicSale.coinType), // The token color of the exchange token - token to be receive
      daysToMilliseconds(1) + BigInt(Date.now()), // The time which a sale ends
      10n, // Min amount of token a user can buy
      1000n, // Max amount of token a user can buy
      randomBytes(32), // CID that points to other informatin about sale on ipfs
      1n, // influences the price, if it is a dynamic price sale
      100n, // the percentage that should be withdrawn at TGE
      0n,
      false, // is sale overflow?
      SCALE_FACTOR,
      daysToMilliseconds(1) + BigInt(Date.now()),
      false, // is sale private?
      fixedPublicSale.createPublicKey("peter")
    );

    expect(fixedPublicSale.getLedger().contractSalesInfo.size()).toBe(1n);
    expect(fixedPublicSale.getLedger().TokenSold).toBe(5000n * SCALE_FACTOR);
    expect(
      fixedPublicSale.getLedger().contractSalesInfo.lookup(1n)
        .vestClaimPercentagePerDay
    ).toBe(100n);
    expect(
      fixedPublicSale.getLedger().contractSalesInfo.lookup(1n)
        .tgeAllocationPercentage
    ).toBe(100n);

    expect(() => {
      fixedPublicSale.baseContext.currentZswapLocalState.coinPublicKey =
        fixedPublicSale.coinPubKeyToEncodedPubKey(mary);
      fixedPublicSale.createTokenSale(
        10n, // start price
        5000n, // The total amount of token to be sold in this particular sale
        encodeTokenType(fixedPublicSale.coinType), // The token color of the exchange token - token to be receive
        daysToMilliseconds(1) + BigInt(Date.now()), // The time which a sale ends
        10n, // Min amount of token a user can buy
        1000n, // Max amount of token a user can buy
        randomBytes(32), // CID that points to other informatin about sale on ipfs
        1n, // influences the price, if it is a dynamic price sale
        100n, // the percentage that should be withdrawn at TGE
        0n,
        false, // is sale overflow?
        SCALE_FACTOR,
        daysToMilliseconds(1) + BigInt(Date.now()),
        false, // is sale private?
        peter
      );
    }).throw("Only the admins can create sale");
  });

  it("should allow any users buy from token sales", () => {
    fixedPublicSale.fundSale(fixedPublicSale.coin(1000, SCALE_FACTOR), 1n);
    expect(
      fixedPublicSale.getLedger().contractSalesInfo.lookup(1n).amountRaised
    ).toBe(1000n * SCALE_FACTOR);
    expect(
      fixedPublicSale.getLedger().contractSalesInfo.lookup(1n).totalTokenSold
    ).toBe(100n * SCALE_FACTOR);
    expect(
      fixedPublicSale.getLedger().contractSalesInfo.lookup(1n).participants
    ).toBe(1n);
    expect(fixedPublicSale.getPrivateState().saleMetadata.length).toBe(1);

    expect(fixedPublicSale.getPrivateState().saleMetadata[0].contribution).toBe(
      1000n * SCALE_FACTOR
    );

    expect(
      fixedPublicSale.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(100n * SCALE_FACTOR);
  });

  it("should allow admin cancel sale", () => {
    expect(fixedPublicSale.getLedger().contractSalesInfo.lookup(1n).phase).toBe(
      0
    );

    expect(() => {
      fixedPublicSale.baseContext.currentZswapLocalState.coinPublicKey =
        fixedPublicSale.coinPubKeyToEncodedPubKey(
          fixedPublicSale.createPublicKey("mary")
        );
      fixedPublicSale.cancelSale(1n);
    }).throw("Unauthorized access. You are not an admin");

    fixedPublicSale.baseContext.currentZswapLocalState.coinPublicKey =
      fixedPublicSale.coinPubKeyToEncodedPubKey(
        fixedPublicSale.createPublicKey("super-admin")
      );

    fixedPublicSale.cancelSale(1n);

    expect(fixedPublicSale.getLedger().contractSalesInfo.lookup(1n).phase).toBe(
      1
    );
  });

  it("should allow participant to initiate a refund", () => {
    expect(() => {
      fixedPublicSale.refund(1n);
    }).throw("Private state and onchain state ");

    fixedPublicSale.baseContext.currentZswapLocalState.coinPublicKey =
      fixedPublicSale.coinPubKeyToEncodedPubKey(mary);
    expect(fixedPublicSale.getPrivateState().saleMetadata[0].contribution).toBe(
      1000n * SCALE_FACTOR
    );
    expect(
      fixedPublicSale.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(100n * SCALE_FACTOR);

    fixedPublicSale.refund(1n);

    expect(fixedPublicSale.getPrivateState().saleMetadata[0]).toBe(undefined);
    expect(fixedPublicSale.getPrivateState().saleMetadata[0]).toBe(undefined);
  });

  describe("Contract test flow for creating, funding, claiming and receiving funds by organizers from a fixed private token sale", () => {
    const fixedPrivateSale = new LaunchpadSimulator(
      {
        secretKey: randomBytes(32),
        saleMetadata: [],
      },
      "peter"
    );

    const peter = fixedPrivateSale.createPublicKey("peter");
    const mary = fixedPrivateSale.createPublicKey("mary");

    it("Contract test flow for creating, funding, cancelling and receiving refund from a fixed public token sale", () => {
      fixedPrivateSale.receiveToken(20000, 1_000_000n);
      expect(fixedPrivateSale.getLedger().TVL.value).toBe(
        20000n * SCALE_FACTOR
      );
    });

    it("should create new sale", () => {
      expect(fixedPrivateSale.getLedger().contractSalesInfo.size()).toBe(0n);
      expect(fixedPrivateSale.getLedger().TokenSold).toBe(0n);

      fixedPrivateSale.createTokenSale(
        10n, // start price
        5000n, // The total amount of token to be sold in this particular sale
        encodeTokenType(fixedPrivateSale.coinType), // The token color of the exchange token - token to be receive
        1000n + BigInt(Date.now()), // The time which a sale ends
        10n, // Min amount of token a user can buy
        1000n, // Max amount of token a user can buy
        randomBytes(32), // CID that points to other informatin about sale on ipfs
        1n, // influences the price, if it is a dynamic price sale
        100n, // the percentage that should be withdrawn at TGE
        0n,
        false, // is sale overflow?
        SCALE_FACTOR,
        daysToMilliseconds(0) + BigInt(Date.now()),
        true, // sale is private
        peter
      );

      expect(fixedPrivateSale.getLedger().contractSalesInfo.size()).toBe(1n);
      expect(fixedPrivateSale.getLedger().TokenSold).toBe(5000n * SCALE_FACTOR);
    });

    it("should add mary to the whitelist and allow only marry to buy from the private token sales", () => {
      expect(fixedPrivateSale.getLedger().allowedUser.isEmpty()).toBe(true);

      fixedPrivateSale.joinAllowedList(mary);
      expect(
        fixedPrivateSale
          .getLedger()
          .allowedUser.member(
            fixedPrivateSale.coinPubKeyToEncodedPubKey(mary).bytes
          )
      ).toBe(true);

      fixedPrivateSale.baseContext.currentZswapLocalState.coinPublicKey =
        fixedPrivateSale.coinPubKeyToEncodedPubKey(mary);
      fixedPrivateSale.fundSale(fixedPrivateSale.coin(1000, SCALE_FACTOR), 1n);
      expect(
        fixedPrivateSale.getLedger().contractSalesInfo.lookup(1n).amountRaised
      ).toBe(1000n * SCALE_FACTOR);

      fixedPrivateSale.baseContext.currentZswapLocalState.coinPublicKey =
        fixedPrivateSale.coinPubKeyToEncodedPubKey(peter);
      expect(() => {
        fixedPrivateSale.fundSale(
          fixedPrivateSale.coin(1000, SCALE_FACTOR),
          1n
        );
      }).throw("You are not eligible for this sale");
    });

    it("should allow users to claim their token allocation", async () => {
      setTimeout(() => {
        fixedPrivateSale.claimTokens(1n);
        expect(
          fixedPrivateSale.getLedger().raisedTokenPools.lookup(1n).value
        ).toBe(0);
      }, 1000);
    });

    it("should allow organizers claim accrued funds", () => {
      setTimeout(() => {
        expect(() => {
          fixedPrivateSale.receiveFundsByOrganizer(1);
        }).throw("You are not the organiser");
        fixedPrivateSale.baseContext.currentZswapLocalState.coinPublicKey =
          fixedPrivateSale.coinPubKeyToEncodedPubKey(peter);
        fixedPrivateSale.receiveFundsByOrganizer(1);
        expect(
          fixedPrivateSale.getLedger().raisedTokenPools.lookup(1n).value
        ).toBe(0n);
        expect(() => {
          fixedPrivateSale.receiveFundsByOrganizer(1);
        }).throw("Funds has been withdrawn from this sale");
      }, 1000);
    });
  });
});
