/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3PoolDerivedState,
  IUniswapV3PoolDerivedStateInterface,
} from "../../../../../../v3-core/artifacts/contracts/interfaces/pool/IUniswapV3PoolDerivedState";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "observe",
    outputs: [
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "secondsPerLiquidityCumulativeX128s",
        type: "uint160[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
    ],
    name: "snapshotCumulativesInside",
    outputs: [
      {
        internalType: "int56",
        name: "tickCumulativeInside",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityInsideX128",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "secondsInside",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IUniswapV3PoolDerivedState__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3PoolDerivedStateInterface {
    return new utils.Interface(_abi) as IUniswapV3PoolDerivedStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3PoolDerivedState {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapV3PoolDerivedState;
  }
}
