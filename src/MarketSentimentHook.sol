// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Hooks} from "@uniswap/v4-core/src/libraries/Hooks.sol";
import {BaseHook} from "../lib/v4-periphery/src/utils/BaseHook.sol";
import {IPoolManager} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/src/types/PoolKey.sol";
import {MarketSentimentOracle} from "./MarketSentimentOracle.sol";
import {BeforeSwapDelta, BeforeSwapDeltaLibrary} from "@uniswap/v4-core/src/types/BeforeSwapDelta.sol";

contract MarketSentimentHook is BaseHook {
    MarketSentimentOracle public immutable oracle;
    
    // Fee adjustment parameters
    uint24 public constant BASE_FEE = 300; // 0.03%
    uint24 public constant MAX_FEE = 10000; // 1%
    uint24 public constant MIN_FEE = 100;   // 0.01%
    
    // Sentiment thresholds
    int256 public constant BULLISH_THRESHOLD = 70;
    int256 public constant BEARISH_THRESHOLD = 30;
    
    // Dynamic fee tiers for bear market
    struct FeeTier {
        uint256 threshold;  // Amount threshold for this tier
        uint24 fee;        // Fee for this tier (in basis points)
    }
    
    // All pools will have the same fee tiers
    FeeTier[] public feeTiers;
    
    constructor(
        IPoolManager _poolManager,
        MarketSentimentOracle _oracle
    ) BaseHook(_poolManager) {
        oracle = _oracle;
        
        // Initialize fee tiers
        feeTiers.push(FeeTier({threshold: 1 ether, fee: 300}));    // 0.01% for < 1 ETH
        feeTiers.push(FeeTier({threshold: 5 ether, fee: 500}));   // 0.03% for 1-5 ETH
        feeTiers.push(FeeTier({threshold: 10 ether, fee: 700}));  // 0.05% for 5-10 ETH
        feeTiers.push(FeeTier({threshold: 50 ether, fee: 1000}));  // 0.1% for 10-50 ETH
        feeTiers.push(FeeTier({threshold: type(uint256).max, fee: 4000})); // 0.5% for > 50 ETH
    }

    function getHookPermissions()
        public
        pure
        override
        returns (Hooks.Permissions memory)
    {
        return
            Hooks.Permissions({
                beforeInitialize: false,
                afterInitialize: false,
                beforeAddLiquidity: false,
                afterAddLiquidity: false,
                beforeRemoveLiquidity: false,
                afterRemoveLiquidity: false,
                beforeSwap: true,
                afterSwap: false,
                beforeDonate: false,
                afterDonate: false,
                beforeSwapReturnDelta: false,
                afterSwapReturnDelta: false,
                afterAddLiquidityReturnDelta: false,
                afterRemoveLiquidityReturnDelta: false
            });
    }

    function _beforeSwap(
        address,
        PoolKey calldata,
        IPoolManager.SwapParams calldata params,
        bytes calldata
    ) internal override returns (bytes4, BeforeSwapDelta, uint24) {
        // Get current market sentiment from oracle
        uint256 rawSentiment = oracle.getMarketSentiment();  // Changed type to match oracle return
        int256 sentiment = int256(rawSentiment) - 50;  // Convert to -50 to 50 range
        
        // Calculate fee based on market sentiment and swap size
        uint24 adjustedFee = calculateAdjustedFee(
            sentiment, 
            uint256(params.amountSpecified < 0 ? -params.amountSpecified : params.amountSpecified)
        );
        
        return (BaseHook.beforeSwap.selector, BeforeSwapDeltaLibrary.ZERO_DELTA, adjustedFee);
    }
    
    function calculateAdjustedFee(int256 sentiment, uint256 swapAmount) public view returns (uint24) {
        if (sentiment >= BULLISH_THRESHOLD) {
            // Decrease fee in bullish market
            return uint24(BASE_FEE * 80 / 100); // 20% decrease
        } else if (sentiment <= BEARISH_THRESHOLD) {
            // In bear market, apply dynamic fee based on swap size
            return calculateDynamicFee(swapAmount);
        }
        
        return BASE_FEE;
    }
    
    function calculateDynamicFee(uint256 swapAmount) public view returns (uint24) {
        for (uint256 i = 0; i < feeTiers.length; i++) {
            if (swapAmount < feeTiers[i].threshold) {
                return feeTiers[i].fee;
            }
        }
        return MAX_FEE; // Fallback to max fee if amount exceeds all tiers
    }
    
    /**
     * @notice Updates a fee tier's threshold and fee
     * @param tierIndex Index of the tier to update
     * @param newThreshold New threshold amount
     * @param newFee New fee in basis points
     */
    function updateFeeTier(
        uint256 tierIndex,
        uint256 newThreshold,
        uint24 newFee
    ) external {
        require(tierIndex < feeTiers.length, "Invalid tier index");
        require(newFee >= MIN_FEE && newFee <= MAX_FEE, "Fee out of range");
        
        // Ensure thresholds are in ascending order
        if (tierIndex > 0) {
            require(newThreshold > feeTiers[tierIndex - 1].threshold, "Threshold must be greater than previous tier");
        }
        if (tierIndex < feeTiers.length - 1) {
            require(newThreshold < feeTiers[tierIndex + 1].threshold, "Threshold must be less than next tier");
        }
        
        feeTiers[tierIndex] = FeeTier({
            threshold: newThreshold,
            fee: newFee
        });
    }
} 