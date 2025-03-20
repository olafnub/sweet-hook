// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@uniswap/v4-core/lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import {Pausable} from "@uniswap/v4-core/lib/openzeppelin-contracts/contracts/utils/Pausable.sol";

contract MarketSentimentOracle is Ownable, Pausable {
    // Struct to store market sentiment data
    struct SentimentData {
        uint256 fearGreedIndex;  // 0-100 scale (0: Extreme Fear, 100: Extreme Greed)
        uint256 timestamp;       // Last update timestamp
    }
    
    // Global market sentiment data
    SentimentData public marketSentiment;
    
    // Events
    event SentimentUpdated(uint256 fearGreedIndex);
    event OraclePaused(address indexed account);
    event OracleUnpaused(address indexed account);
    
    // Constants
    uint256 public constant UPDATE_INTERVAL = 1 hours;
    uint256 public constant MAX_FEAR_GREED_INDEX = 100;
    
    constructor() Ownable(msg.sender) {}
    
    /**
     * @notice Updates the market fear & greed index
     * @param fearGreedIndex The fear & greed index (0-100)
     */
    function updateSentiment(
        uint256 fearGreedIndex
    ) external onlyOwner whenNotPaused {
        require(fearGreedIndex <= MAX_FEAR_GREED_INDEX, "Index out of range");
        
        marketSentiment = SentimentData({
            fearGreedIndex: fearGreedIndex,
            timestamp: block.timestamp
        });
        
        emit SentimentUpdated(fearGreedIndex);
    }
    
    /**
     * @notice Gets the current market fear & greed index
     * @return The current fear & greed index
     */
    function getMarketSentiment() public view returns (uint256) {
        require(marketSentiment.timestamp > 0, "No sentiment data available");
        require(block.timestamp - marketSentiment.timestamp <= UPDATE_INTERVAL, "Sentiment data too old");
        return marketSentiment.fearGreedIndex;
    }
    
    /**
     * @notice Pauses the oracle
     */
    function pause() external onlyOwner {
        _pause();
        emit OraclePaused(msg.sender);
    }
    
    /**
     * @notice Unpauses the oracle
     */
    function unpause() external onlyOwner {
        _unpause();
        emit OracleUnpaused(msg.sender);
    }
} 