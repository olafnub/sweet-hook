/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  CurrencyLibrary,
  CurrencyLibraryInterface,
} from "../../../../../../@uniswap/v4-core/src/types/Currency.sol/CurrencyLibrary";

const _abi = [
  {
    inputs: [],
    name: "ERC20TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ADDRESS_ZERO",
    outputs: [
      {
        internalType: "Currency",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6091610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806366e79509146038575b600080fd5b603f600081565b6040516001600160a01b03909116815260200160405180910390f3fea2646970667358221220260be0b560f2354629178fa80c6faa0822bc1651b2f53f0049ef64a0eb757fe164736f6c63430008180033";

type CurrencyLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurrencyLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurrencyLibrary__factory extends ContractFactory {
  constructor(...args: CurrencyLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CurrencyLibrary & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CurrencyLibrary__factory {
    return super.connect(runner) as CurrencyLibrary__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurrencyLibraryInterface {
    return new Interface(_abi) as CurrencyLibraryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CurrencyLibrary {
    return new Contract(address, _abi, runner) as unknown as CurrencyLibrary;
  }
}
