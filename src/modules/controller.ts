import { encodeFunctionData } from "viem";
import { X42Client } from "../core/client";
import { FTControllerV2ABI } from "../abis/FTControllerV2ABI";
import { Address } from "../types";

export class ControllerModule {
  private client: X42Client;
  public controllerAddress: Address;

  constructor(client: X42Client, controllerAddress: Address) {
    this.client = client;
    this.controllerAddress = controllerAddress;
  }

  /**
   * Encode a payload to deploy a new market
   */
  encodeDeployMarket(
    paramsQuestion: {
      timestampEnd: bigint;
      title: string;
      ancillaryData: `0x${string}`;
      imageUri: string;
      outcomeNames: string[];
      outcomeImageUris: string[];
    },
    paramsMarket: {
      parentTokenId: bigint;
      collateral: Address;
      curve: Address;
      timestampStart: bigint;
    },
    oracle: Address,
    otSeed: bigint
  ) {
    return encodeFunctionData({
      abi: FTControllerV2ABI,
      functionName: "deployMarket",
      args: [paramsQuestion, paramsMarket, oracle, otSeed]
    });
  }

  /**
   * Encode a payload to whitelist or unwhitelist a collateral
   */
  encodeSetWhitelistedCollateral(collateral: Address, whitelist: boolean, collateralSeedMin: bigint) {
    return encodeFunctionData({
      abi: FTControllerV2ABI,
      functionName: "setWhitelistedCollateral",
      args: [collateral, whitelist, collateralSeedMin]
    });
  }

  /**
   * Encode a payload to whitelist or unwhitelist a curve
   */
  encodeSetWhitelistedCurve(curve: Address, whitelist: boolean) {
    return encodeFunctionData({
      abi: FTControllerV2ABI,
      functionName: "setWhitelistedCurve",
      args: [curve, whitelist]
    });
  }
}
