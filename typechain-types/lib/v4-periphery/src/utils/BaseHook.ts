/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export type PoolKeyStruct = {
  currency0: AddressLike;
  currency1: AddressLike;
  fee: BigNumberish;
  tickSpacing: BigNumberish;
  hooks: AddressLike;
};

export type PoolKeyStructOutput = [
  currency0: string,
  currency1: string,
  fee: bigint,
  tickSpacing: bigint,
  hooks: string
] & {
  currency0: string;
  currency1: string;
  fee: bigint;
  tickSpacing: bigint;
  hooks: string;
};

export declare namespace IPoolManager {
  export type ModifyLiquidityParamsStruct = {
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    liquidityDelta: BigNumberish;
    salt: BytesLike;
  };

  export type ModifyLiquidityParamsStructOutput = [
    tickLower: bigint,
    tickUpper: bigint,
    liquidityDelta: bigint,
    salt: string
  ] & {
    tickLower: bigint;
    tickUpper: bigint;
    liquidityDelta: bigint;
    salt: string;
  };

  export type SwapParamsStruct = {
    zeroForOne: boolean;
    amountSpecified: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type SwapParamsStructOutput = [
    zeroForOne: boolean,
    amountSpecified: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    zeroForOne: boolean;
    amountSpecified: bigint;
    sqrtPriceLimitX96: bigint;
  };
}

export declare namespace Hooks {
  export type PermissionsStruct = {
    beforeInitialize: boolean;
    afterInitialize: boolean;
    beforeAddLiquidity: boolean;
    afterAddLiquidity: boolean;
    beforeRemoveLiquidity: boolean;
    afterRemoveLiquidity: boolean;
    beforeSwap: boolean;
    afterSwap: boolean;
    beforeDonate: boolean;
    afterDonate: boolean;
    beforeSwapReturnDelta: boolean;
    afterSwapReturnDelta: boolean;
    afterAddLiquidityReturnDelta: boolean;
    afterRemoveLiquidityReturnDelta: boolean;
  };

  export type PermissionsStructOutput = [
    beforeInitialize: boolean,
    afterInitialize: boolean,
    beforeAddLiquidity: boolean,
    afterAddLiquidity: boolean,
    beforeRemoveLiquidity: boolean,
    afterRemoveLiquidity: boolean,
    beforeSwap: boolean,
    afterSwap: boolean,
    beforeDonate: boolean,
    afterDonate: boolean,
    beforeSwapReturnDelta: boolean,
    afterSwapReturnDelta: boolean,
    afterAddLiquidityReturnDelta: boolean,
    afterRemoveLiquidityReturnDelta: boolean
  ] & {
    beforeInitialize: boolean;
    afterInitialize: boolean;
    beforeAddLiquidity: boolean;
    afterAddLiquidity: boolean;
    beforeRemoveLiquidity: boolean;
    afterRemoveLiquidity: boolean;
    beforeSwap: boolean;
    afterSwap: boolean;
    beforeDonate: boolean;
    afterDonate: boolean;
    beforeSwapReturnDelta: boolean;
    afterSwapReturnDelta: boolean;
    afterAddLiquidityReturnDelta: boolean;
    afterRemoveLiquidityReturnDelta: boolean;
  };
}

export interface BaseHookInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "afterAddLiquidity"
      | "afterDonate"
      | "afterInitialize"
      | "afterRemoveLiquidity"
      | "afterSwap"
      | "beforeAddLiquidity"
      | "beforeDonate"
      | "beforeInitialize"
      | "beforeRemoveLiquidity"
      | "beforeSwap"
      | "getHookPermissions"
      | "poolManager"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterAddLiquidity",
    values: [
      AddressLike,
      PoolKeyStruct,
      IPoolManager.ModifyLiquidityParamsStruct,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterDonate",
    values: [AddressLike, PoolKeyStruct, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "afterInitialize",
    values: [AddressLike, PoolKeyStruct, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "afterRemoveLiquidity",
    values: [
      AddressLike,
      PoolKeyStruct,
      IPoolManager.ModifyLiquidityParamsStruct,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterSwap",
    values: [
      AddressLike,
      PoolKeyStruct,
      IPoolManager.SwapParamsStruct,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAddLiquidity",
    values: [
      AddressLike,
      PoolKeyStruct,
      IPoolManager.ModifyLiquidityParamsStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeDonate",
    values: [AddressLike, PoolKeyStruct, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeInitialize",
    values: [AddressLike, PoolKeyStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeRemoveLiquidity",
    values: [
      AddressLike,
      PoolKeyStruct,
      IPoolManager.ModifyLiquidityParamsStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeSwap",
    values: [
      AddressLike,
      PoolKeyStruct,
      IPoolManager.SwapParamsStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getHookPermissions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "afterAddLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterDonate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterInitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterRemoveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "afterSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beforeAddLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeDonate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeInitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeRemoveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "beforeSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getHookPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolManager",
    data: BytesLike
  ): Result;
}

export interface BaseHook extends BaseContract {
  connect(runner?: ContractRunner | null): BaseHook;
  waitForDeployment(): Promise<this>;

  interface: BaseHookInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  afterAddLiquidity: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      delta: BigNumberish,
      feesAccrued: BigNumberish,
      hookData: BytesLike
    ],
    [[string, bigint]],
    "nonpayable"
  >;

  afterDonate: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      amount0: BigNumberish,
      amount1: BigNumberish,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  afterInitialize: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      sqrtPriceX96: BigNumberish,
      tick: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  afterRemoveLiquidity: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      delta: BigNumberish,
      feesAccrued: BigNumberish,
      hookData: BytesLike
    ],
    [[string, bigint]],
    "nonpayable"
  >;

  afterSwap: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.SwapParamsStruct,
      delta: BigNumberish,
      hookData: BytesLike
    ],
    [[string, bigint]],
    "nonpayable"
  >;

  beforeAddLiquidity: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  beforeDonate: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      amount0: BigNumberish,
      amount1: BigNumberish,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  beforeInitialize: TypedContractMethod<
    [sender: AddressLike, key: PoolKeyStruct, sqrtPriceX96: BigNumberish],
    [string],
    "nonpayable"
  >;

  beforeRemoveLiquidity: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  beforeSwap: TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.SwapParamsStruct,
      hookData: BytesLike
    ],
    [[string, bigint, bigint]],
    "nonpayable"
  >;

  getHookPermissions: TypedContractMethod<
    [],
    [Hooks.PermissionsStructOutput],
    "view"
  >;

  poolManager: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "afterAddLiquidity"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      delta: BigNumberish,
      feesAccrued: BigNumberish,
      hookData: BytesLike
    ],
    [[string, bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "afterDonate"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      amount0: BigNumberish,
      amount1: BigNumberish,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "afterInitialize"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      sqrtPriceX96: BigNumberish,
      tick: BigNumberish
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "afterRemoveLiquidity"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      delta: BigNumberish,
      feesAccrued: BigNumberish,
      hookData: BytesLike
    ],
    [[string, bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "afterSwap"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.SwapParamsStruct,
      delta: BigNumberish,
      hookData: BytesLike
    ],
    [[string, bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeAddLiquidity"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeDonate"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      amount0: BigNumberish,
      amount1: BigNumberish,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeInitialize"
  ): TypedContractMethod<
    [sender: AddressLike, key: PoolKeyStruct, sqrtPriceX96: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeRemoveLiquidity"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.ModifyLiquidityParamsStruct,
      hookData: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeSwap"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      key: PoolKeyStruct,
      params: IPoolManager.SwapParamsStruct,
      hookData: BytesLike
    ],
    [[string, bigint, bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getHookPermissions"
  ): TypedContractMethod<[], [Hooks.PermissionsStructOutput], "view">;
  getFunction(
    nameOrSignature: "poolManager"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
