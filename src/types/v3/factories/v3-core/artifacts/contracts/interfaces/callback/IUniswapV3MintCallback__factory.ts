/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3MintCallback,
  IUniswapV3MintCallbackInterface,
} from "../../../../../../v3-core/artifacts/contracts/interfaces/callback/IUniswapV3MintCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3MintCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUniswapV3MintCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3MintCallbackInterface {
    return new utils.Interface(_abi) as IUniswapV3MintCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3MintCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapV3MintCallback;
  }
}
