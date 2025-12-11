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

describe("Contract test user activities on public sale", () => {
  const simulator_public_sale = new LaunchpadSimulator(
    {
      secretKey: randomBytes(32),
      saleMetadata: [],
    },
    "peter"
  );

  const peter = simulator_public_sale.createPublicKey("peter");
  const mary = simulator_public_sale.createPublicKey("mary");

  it("Contract test for receiving minted tokens from another contract", () => {
    simulator_public_sale.receiveToken(20000);
    expect(simulator_public_sale.getLedger().TVL.value).toBe(
      20000n * simulator_public_sale.scaleFactor()
    );
  });

  it("should create new sale", () => {
    expect(simulator_public_sale.getLedger().contractSalesInfo.size()).toBe(0n);
    expect(simulator_public_sale.getLedger().TokenSold).toBe(0n);

    simulator_public_sale.createTokenSale(
      10n, // start price
      5000n, // The total amount of token to be sold in this particular sale
      encodeTokenType(simulator_public_sale.coinType), // The token color of the exchange token - token to be receive
      daysToMilliseconds(1) + BigInt(Date.now()), // The time which a sale ends
      10n, // Min amount of token a user can buy
      1000n, // Max amount of token a user can buy
      randomBytes(32), // CID that points to other informatin about sale on ipfs
      1n, // influences the price, if it is a dynamic price sale
      false, // is sale private?
      100n, // the percentage that should be withdrawn at TGE
      0n // vesting period
    );

    expect(simulator_public_sale.getLedger().contractSalesInfo.size()).toBe(1n);
    expect(simulator_public_sale.getLedger().TokenSold).toBe(
      5000n * simulator_public_sale.scaleFactor()
    );
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n)
        .vestClaimPercentagePerDay
    ).toBe(100n);
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n)
        .tgeAllocationPercentage
    ).toBe(100n);
  });

  it("should allow any users buy from token sales", () => {
    simulator_public_sale.baseContext.currentZswapLocalState.coinPublicKey =
      simulator_public_sale.coinPubKeyToEncodedPubKey(mary);

    simulator_public_sale.fundSale(simulator_public_sale.coin(1000), 1n);
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n)
        .amountRaised
    ).toBe(1000n * simulator_public_sale.scaleFactor());
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n)
        .totalTokenSold
    ).toBe(100n * simulator_public_sale.scaleFactor());
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n)
        .participants
    ).toBe(1n);
    expect(simulator_public_sale.getPrivateState().saleMetadata.length).toBe(1);

    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].contribution
    ).toBe(1000n * simulator_public_sale.scaleFactor());

    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(100n * simulator_public_sale.scaleFactor());
  });

  it("should allow participant to initiate a refund", () => {
    simulator_public_sale.refund(1n, 150n);
    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].contribution
    ).toBe(850n * simulator_public_sale.scaleFactor());

    expect(simulator_public_sale.getLedger().raisedTokenPool.value).toBe(
      850n * simulator_public_sale.scaleFactor()
    );
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n)
        .amountRaised
    ).toBe(850n * simulator_public_sale.scaleFactor());
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n)
        .totalTokenSold
    ).toBe(85n * simulator_public_sale.scaleFactor());

    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(85n * simulator_public_sale.scaleFactor());

    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].contribution
    ).toBe(850n * simulator_public_sale.scaleFactor());

    expect(() => {
      simulator_public_sale.refund(1n, 1000n);
    }).throw("Refund amount can not be greater than contribution");
  });

  it("should allow participants claim their allocated tokens", () => {
    expect(() => simulator_public_sale.claimTokens(2n)).throw(
      "Sale does not exist"
    );
    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(85n * simulator_public_sale.scaleFactor());
    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].claimedAllocation
    ).toBe(0n);
    expect(simulator_public_sale.getLedger().TVL.value).toBe(
      20000n * simulator_public_sale.scaleFactor()
    );
    simulator_public_sale.claimTokens(1n);
    expect(
      simulator_public_sale.getPrivateState().saleMetadata[0].claimedAllocation
    ).toBe(85n * simulator_public_sale.scaleFactor());
    expect(simulator_public_sale.getLedger().TVL.value).toBe(
      19915n * simulator_public_sale.scaleFactor()
    );
    // simulator_public_sale.claimTokens(1n);
  });

  it("should allow organisers cancel sale", () => {
    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n).phase
    ).toBe(0);

    simulator_public_sale.baseContext.currentZswapLocalState.coinPublicKey =
      simulator_public_sale.coinPubKeyToEncodedPubKey(
        simulator_public_sale.createPublicKey("super-admin")
      );

    simulator_public_sale.cancelSale(1n);

    expect(
      simulator_public_sale.getLedger().contractSalesInfo.lookup(1n).phase
    ).toBe(1);
  });

  it("should allow organizer to claim tokens", () => {
    const someone = simulator_public_sale.createPublicKey("intruder");
    expect(() => {
      simulator_public_sale.baseContext.currentZswapLocalState.coinPublicKey =
        simulator_public_sale.coinPubKeyToEncodedPubKey(someone);
      simulator_public_sale.receiveFundsByOrganizer(1);
    }).throw("You are not the organizer");

    simulator_public_sale.baseContext.currentZswapLocalState.coinPublicKey =
      simulator_public_sale.coinPubKeyToEncodedPubKey(peter);

    simulator_public_sale.receiveFundsByOrganizer(1);
    expect(simulator_public_sale.getLedger().raisedTokenPool.value).toBe(0n);

    expect(() => {
      simulator_public_sale.receiveFundsByOrganizer(1);
    }).throw("Funds has been withdrawn from this sale");
  });
});

describe("Contract test user activity on private sale", () => {
  const simulator_private = new LaunchpadSimulator(
    {
      secretKey: randomBytes(32),
      saleMetadata: [],
    },
    "mary"
  );

  expect(simulator_private.getPrivateState().saleMetadata.length).toBe(0);
  // unauthourized users
  const peter = simulator_private.createPublicKey("peter");
  const mary = simulator_private.createPublicKey("mary");

  // authourized users
  const alice = simulator_private.createPublicKey("alice");
  const james = simulator_private.createPublicKey("james");
  const vera = simulator_private.createPublicKey("vera");

  it("should add users to allowed list for private token sales", () => {
    [alice, james, vera].forEach((pubKey) => {
      simulator_private.joinAllowedList(pubKey);
      expect(
        simulator_private
          .getLedger()
          .allowedUser.member(
            simulator_private.coinPubKeyToEncodedPubKey(pubKey).bytes
          )
      ).toBe(true);
    });
    expect(simulator_private.getLedger().allowedUser.size()).toBe(3n);

    [mary, peter].forEach((pubKey) => {
      expect(
        simulator_private
          .getLedger()
          .allowedUser.member(
            simulator_private.coinPubKeyToEncodedPubKey(pubKey).bytes
          )
      ).toBe(false);
    });
  });

  it("should add tokens to TVL", () => {
    simulator_private.receiveToken(10000);
    expect(simulator_private.getLedger().TVL.value).toBe(
      10000n * simulator_private.scaleFactor()
    );
  });

  it("should create new sale", () => {
    simulator_private.createTokenSale(
      10n, // start price
      5000n, // The total amount of token to be sold in this particular sale
      encodeTokenType(simulator_private.coinType), // The token color of the exchange token - token to be receive
      daysToMilliseconds(1) + BigInt(Date.now()), // The time which a sale ends
      10n, // Min amount of token a user can buy
      1000n, // Max amount of token a user can buy
      randomBytes(32), // CID that points to other informatin about sale on ipfs
      0n, // influences the price, if it is a dynamic price sale
      true, // is sale private?
      10n, // the percentage that should be withdrawn at TGE
      daysToMilliseconds(0) // vesting period
    );

    expect(simulator_private.getLedger().contractSalesInfo.size()).toBe(1n);
    expect(simulator_private.getLedger().TokenSold).toBe(
      5000n * simulator_private.scaleFactor()
    );
  });

  it("should allow users buy from private token sales", () => {
    simulator_private.baseContext.currentZswapLocalState.coinPublicKey =
      simulator_private.coinPubKeyToEncodedPubKey(alice);

    simulator_private.fundSale(simulator_private.coin(1000), 1n);

    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).amountRaised
    ).toBe(1000n * simulator_private.scaleFactor());

    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).totalTokenSold
    ).toBe(100n * simulator_private.scaleFactor());

    expect(simulator_private.getPrivateState().saleMetadata.length).toBe(1);

    expect(() => {
      simulator_private.baseContext.currentZswapLocalState.coinPublicKey =
        simulator_private.coinPubKeyToEncodedPubKey(mary);
      simulator_private.fundSale(simulator_private.coin(1000), 1n);
    }).throw("You are not eligible for this sale");

    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).amountRaised
    ).toBe(1000n * simulator_private.scaleFactor());

    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).totalTokenSold
    ).toBe(100n * simulator_private.scaleFactor());
  });

  it("should allow participants to initiate a refund", () => {
    expect(
      simulator_private.getPrivateState().saleMetadata[0].contribution
    ).toBe(1000n * simulator_private.scaleFactor());
    expect(
      simulator_private.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(100n * simulator_private.scaleFactor());

    simulator_private.refund(1n, 150n);

    expect(
      simulator_private.getPrivateState().saleMetadata[0].contribution
    ).toBe(850n * simulator_private.scaleFactor());

    expect(simulator_private.getLedger().raisedTokenPool.value).toBe(
      850n * simulator_private.scaleFactor()
    );
    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).amountRaised
    ).toBe(850n * simulator_private.scaleFactor());
    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).totalTokenSold
    ).toBe(85n * simulator_private.scaleFactor());

    expect(
      simulator_private.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(85n * simulator_private.scaleFactor());

    expect(
      simulator_private.getPrivateState().saleMetadata[0].contribution
    ).toBe(850n * simulator_private.scaleFactor());

    expect(() => {
      simulator_private.refund(1n, 1000n);
    }).throw("Refund amount can not be greater than contribution");
  });

  it("should allow participants claim their allocated tokens", () => {
    expect(() => simulator_private.claimTokens(2n)).throw(
      "Sale does not exist"
    );
    expect(
      simulator_private.getPrivateState().saleMetadata[0].totalAllocation
    ).toBe(85n * simulator_private.scaleFactor());
    expect(
      simulator_private.getPrivateState().saleMetadata[0].claimedAllocation
    ).toBe(0n * simulator_private.scaleFactor());
    expect(simulator_private.getLedger().TVL.value).toBe(
      10000n * simulator_private.scaleFactor()
    );
    simulator_private.claimTokens(1n);
    expect(
      simulator_private.getPrivateState().saleMetadata[0].claimedAllocation
    ).toBe(85n * simulator_private.scaleFactor());
    simulator_private.getLedger().contractSalesInfo.lookup(1n).vestingPeriod =
      0n;
    expect(simulator_private.getLedger().TVL.value).toBe(
      9915n * simulator_private.scaleFactor()
    );
    // simulator_public_sale.claimTokens(1n);
  });

  it("should allow organisers cancel sale", () => {
    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).phase
    ).toBe(0);

    simulator_private.baseContext.currentZswapLocalState.coinPublicKey =
      simulator_private.coinPubKeyToEncodedPubKey(
        simulator_private.createPublicKey("super-admin")
      );

    simulator_private.cancelSale(1n);

    expect(
      simulator_private.getLedger().contractSalesInfo.lookup(1n).phase
    ).toBe(1);
  });

  it("should allow organizer to claim tokens", () => {
    expect(() => {
      simulator_private.baseContext.currentZswapLocalState.coinPublicKey =
        simulator_private.coinPubKeyToEncodedPubKey(alice);
      simulator_private.receiveFundsByOrganizer(1);
    }).throw("You are not the organizer");

    simulator_private.baseContext.currentZswapLocalState.coinPublicKey =
      simulator_private.coinPubKeyToEncodedPubKey(mary);

    simulator_private.receiveFundsByOrganizer(1);
    expect(simulator_private.getLedger().raisedTokenPool.value).toBe(0n);

    expect(() => {
      simulator_private.receiveFundsByOrganizer(1);
    }).throw("Funds has been withdrawn from this sale");
  });
});

describe("Contract test for sale with vesting period", () => {
  const simulator_with_vest = new LaunchpadSimulator(
    {
      secretKey: randomBytes(32),
      saleMetadata: [],
    },
    "peter"
  );

  const mary = simulator_with_vest.createPublicKey("mary");

  it("should add tokens to TVL", () => {
    simulator_with_vest.receiveToken(15000);
    expect(simulator_with_vest.getLedger().TVL.value).toBe(
      15000n * simulator_with_vest.scaleFactor()
    );
  });

  it("should allow organiser to create a sale with vest", () => {
    simulator_with_vest.createTokenSale(
      10n, // start price
      5000n, // The total amount of token to be sold in this particular sale
      encodeTokenType(simulator_with_vest.coinType), // The token color of the exchange token - token to be receive
      daysToMilliseconds(1) + BigInt(Date.now()), // The time which a sale ends
      10n, // Min amount of token a user can buy
      1000n, // Max amount of token a user can buy
      randomBytes(32), // CID that points to other informatin about sale on ipfs
      0n, // influences the price, if it is a dynamic price sale
      false, // is sale private?
      10n, // the percentage that should be withdrawn at TGE
      daysToMilliseconds(4) // vesting period
    );

    expect(simulator_with_vest.getLedger().contractSalesInfo.size()).toBe(1n);
    expect(simulator_with_vest.getLedger().TokenSold).toBe(
      5000n * simulator_with_vest.scaleFactor()
    );
  });

  it("should allow any users buy from token sales", () => {
    simulator_with_vest.baseContext.currentZswapLocalState.coinPublicKey =
      simulator_with_vest.coinPubKeyToEncodedPubKey(mary);

    simulator_with_vest.fundSale(simulator_with_vest.coin(1000), 1n);
  });

  it("should allow participants claim their allocated tokens", () => {
    expect(
      simulator_with_vest.getPrivateState().saleMetadata[0].claimedAllocation
    ).toBe(0n);
    expect(simulator_with_vest.getLedger().TVL.value).toBe(
      15000n * simulator_with_vest.scaleFactor()
    );
    expect(() => simulator_with_vest.claimTokens(1n)).throw(
      "No tokens available to claim at this time"
    );
    expect(
      simulator_with_vest.getPrivateState().saleMetadata[0].claimedAllocation
    ).toBe(0n);
    simulator_with_vest.getLedger().contractSalesInfo.lookup(1n).vestingPeriod =
      0n;
    expect(simulator_with_vest.getLedger().TVL.value).toBe(
      15000n * simulator_with_vest.scaleFactor()
    );
    // simulator_public_sale.claimTokens(1n);
  });
});
