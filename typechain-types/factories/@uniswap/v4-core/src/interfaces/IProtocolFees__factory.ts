/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IProtocolFees,
  IProtocolFeesInterface,
} from "../../../../../@uniswap/v4-core/src/interfaces/IProtocolFees";

const _abi = [
  {
    inputs: [],
    name: "InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "ProtocolFeeCurrencySynced",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "ProtocolFeeTooLarge",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "protocolFeeController",
        type: "address",
      },
    ],
    name: "ProtocolFeeControllerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "PoolId",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "protocolFee",
        type: "uint24",
      },
    ],
    name: "ProtocolFeeUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "Currency",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "collectProtocolFees",
    outputs: [
      {
        internalType: "uint256",
        name: "amountCollected",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeeController",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Currency",
        name: "currency",
        type: "address",
      },
    ],
    name: "protocolFeesAccrued",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "Currency",
            name: "currency0",
            type: "address",
          },
          {
            internalType: "Currency",
            name: "currency1",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "int24",
            name: "tickSpacing",
            type: "int24",
          },
          {
            internalType: "contract IHooks",
            name: "hooks",
            type: "address",
          },
        ],
        internalType: "struct PoolKey",
        name: "key",
        type: "tuple",
      },
      {
        internalType: "uint24",
        name: "newProtocolFee",
        type: "uint24",
      },
    ],
    name: "setProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "setProtocolFeeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IProtocolFees__factory {
  static readonly abi = _abi;
  static createInterface(): IProtocolFeesInterface {
    return new Interface(_abi) as IProtocolFeesInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IProtocolFees {
    return new Contract(address, _abi, runner) as unknown as IProtocolFees;
  }
}
