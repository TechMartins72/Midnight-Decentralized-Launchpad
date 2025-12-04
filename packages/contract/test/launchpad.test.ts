import { describe, it, expect } from "vitest";
import { LaunchpadSimulator } from "./launchpad-simulator.js";
import {
  NetworkId,
  setNetworkId,
} from "@midnight-ntwrk/midnight-js-network-id";
import { randomBytes } from "crypto";
import { daysToMilliseconds } from "./utils.js";
import { encodeTokenType } from "@midnight-ntwrk/ledger";

// Set network mode to undeployed (other options -- testnet, mainnet)
setNetworkId(NetworkId.Undeployed);

// instantiate the Simulator class
const simulator = new LaunchpadSimulator({
  secretKey: randomBytes(32),
  saleMetadata: [],
});

// authourized users
const alice = simulator.createPublicKey("alice");
const james = simulator.createPublicKey("james");
const vera = simulator.createPublicKey("vera");
// unauthourized users
const peter = simulator.createPublicKey("peter"); // pteter is the sale organizer
const mary = simulator.createPublicKey("mary");

// should add users --  vera, and vera to the allowed list
describe("Contract test for adding users to allowed list", () => {
  it("should add users to allowed list for private token sales", () => {
    simulator.joinAllowedList(alice);
    simulator.joinAllowedList(james);
    simulator.joinAllowedList(vera);

    // allowed list should contain 3 users - if added successfully
    expect(simulator.getLedger().allowedUser.size()).toBe(3n);

    // should result to false as user four was not added to the allowed list
    expect(
      simulator
        .getLedger()
        .allowedUser.member(simulator.stringToBytes(peter).bytes)
    ).toBe(false);
  });
});

describe("Contract test for sale creation", () => {
  it("should create a new token", () => {
    // Initially, there should be no tokens created
    simulator.createToken(100n);
  });

  // when a token sale is deployed, the token to be sold is received from another contract through midnight.js api - this demo the action
  it("should add tokens to TVL", () => {
    simulator.receiveToken(20000);
    expect(simulator.getLedger().TVL.value).toBe(20000n);
  });

  it("should create new sale", () => {
    // Super admin create sale with token collected
    expect(simulator.getLedger().contractSalesInfo.size()).toBe(0n);
    expect(simulator.getLedger().TokenSold).toBe(0n);

    simulator.createTokenSale(
      10n, // start price
      5000n, // The total amount of token to be sold in this particular sale
      encodeTokenType(simulator.coinType), // The token color of the exchange token - token to be receive
      daysToMilliseconds(1) + BigInt(Date.now()), // The time which a sale ends
      10n, // Min amount of token a user can buy
      1000n, // Max amount of token a user can buy
      randomBytes(32), // CID that points to other informatin about sale on ipfs
      1n, // influences the price, if it is a dynamic price sale
      false, // is sale private?
      10n, // the period whcih the token will be completely locked
      daysToMilliseconds(2) + BigInt(Date.now()), // tge period
      100n, // the percentage that should be withdrawn at TGE
      daysToMilliseconds(0) // vesting period
    );

    expect(simulator.getLedger().contractSalesInfo.size()).toBe(1n);
    expect(simulator.getLedger().TokenSold).toBe(5000n);

    simulator.createTokenSale(
      10n, // start price
      5000n, // The total amount of token to be sold in this particular sale
      encodeTokenType(simulator.coinType), // The token color of the exchange token - token to be receive
      daysToMilliseconds(1) + BigInt(Date.now()), // The time which a sale ends
      10n, // Min amount of token a user can buy
      1000n, // Max amount of token a user can buy
      randomBytes(32), // CID that points to other informatin about sale on ipfs
      0n, // influences the price, if it is a dynamic price sale
      true, // is sale private?
      10n, // the period whcih the token will be completely locked
      daysToMilliseconds(2) + BigInt(Date.now()), // tge period
      10n, // the percentage that should be withdrawn at TGE
      daysToMilliseconds(4) // vesting period
    );

    expect(simulator.getLedger().contractSalesInfo.size()).toBe(2n);
    expect(simulator.getLedger().TokenSold).toBe(10000n);
  });
});

describe("Contract test for funding sales", () => {
  it("should allow any users buy from public token sales", () => {
    // should allow anybody participate in the sale as it is public
    simulator.baseContext.currentZswapLocalState.coinPublicKey =
      simulator.stringToBytes(james);
    // participate in sale one as it is a public sale
    simulator.fundSale(simulator.coin(500), 1n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(1n).amountRaised
    ).toBe(500n);
    // should be 50 - since token price starts at 10 (exchange ratio) and the price is not dynamic (slope = 1n)
    expect(
      simulator.getLedger().contractSalesInfo.lookup(1n).totalTokenSold
    ).toBe(50n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(1n).participants
    ).toBe(1n);
    // would checks james's private state to validate private state storage action
    // expect should be 1 since james just perform his first sale
    expect(simulator.getPrivateState().saleMetadata.length).toBe(1);
    // expect should be 500 - since that was what james contributed to the sale
    expect(simulator.getPrivateState().saleMetadata[0].contribution).toBe(500n);
    // expect should be 50 - since that was what james allocation based on the alloction formula (contribution / ratio)
    expect(simulator.getPrivateState().saleMetadata[0].totalAllocation).toBe(
      50n
    );

    simulator.baseContext.currentZswapLocalState.coinPublicKey =
      simulator.stringToBytes(mary);
    simulator.fundSale(simulator.coin(500), 1n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(1n).amountRaised
    ).toBe(1000n);

    // should be 58 - it increases with slope (1) per token sale with the formula ((amount sold * price slope) + ration)
    expect(
      simulator.getLedger().contractSalesInfo.lookup(1n).totalTokenSold
    ).toBe(58n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(1n).participants
    ).toBe(2n);

    // would checks mary's private state to validate private state storage action
    // expect should be 1 since mary just perform his first sale
    expect(simulator.getPrivateState().saleMetadata.length).toBe(1);
    // expect should be 500 - since that was what mary contributed to the sale
    expect(simulator.getPrivateState().saleMetadata[0].contribution).toBe(500n);
    // expect should be 8 - since that was what mary allocation based on the alloction formula (contribution / ((total token sold * slope (1)) + ratio))
    expect(simulator.getPrivateState().saleMetadata[0].totalAllocation).toBe(
      8n
    );
  });

  it("should allow users buy from private token sales", () => {
    // change vera key to an user one defined on line 81
    simulator.baseContext.currentZswapLocalState.coinPublicKey =
      simulator.stringToBytes(vera);
    // fund private sale
    simulator.fundSale(simulator.coin(1000), 2n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).amountRaised
    ).toBe(1000n);
    // should be 50 - since token price starts at 10 and the price is not dynamic (slope = 0n)
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).totalTokenSold
    ).toBe(100n);
    // should be 50 - if vera participated successfully
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).participants
    ).toBe(1n);

    simulator.fundSale(simulator.coin(1000), 2n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).amountRaised
    ).toBe(2000n);
    // should be 50 - since token price starts at 10 and the price is not dynamic (slope = 0n)
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).totalTokenSold
    ).toBe(200n);
    // should be 50 - if vera participated successfully
    // CHECK IF USER HAS CONTRIBUTED BEFORE
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).participants
    ).toBe(1n);

    // would checks vera's private state to validate private state storage action
    // expect should be 1 since vera just perform his first sale
    // expect(simulator.getPrivateState().saleMetadata.length).toBe(1);
    // expect should be 500 - since that was what vera contributed to the sale
    // expect(simulator.getPrivateState().saleMetadata[0].contribution).toBe(
    //   1000n
    // );
    // expect should be 8 - since that was what vera allocation based on the alloction formula (contribution / ((total token sold * slope (1)) + ratio))
    // expect(simulator.getPrivateState().saleMetadata[0].totalAllocation).toBe(
    //   100n
    // );

    // should not allow mary because the public key is not included in the allowed list
    expect(() => {
      simulator.baseContext.currentZswapLocalState.coinPublicKey =
        simulator.stringToBytes(mary);
      // fund private sale
      simulator.fundSale(simulator.coin(1000), 2n);
    }).throw("You are not eligible for this sale");
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).amountRaised
    ).toBe(1000n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).totalTokenSold
    ).toBe(100n);
    expect(
      simulator.getLedger().contractSalesInfo.lookup(2n).participants
    ).toBe(1n);
  });
});

describe("Contract test for refund", () => {
  it("should allow participant to initiate a refund", () => {});
});

describe("Contract test for claiming tokens", () => {
  it("should allow participants to their allocated tokens", () => {});
});

describe("Contract for test claiming contributed tokens by organiser", () => {
  it("should allow organizer to claim tokens", () => {});
});
