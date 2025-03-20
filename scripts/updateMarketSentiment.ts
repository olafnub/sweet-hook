import { ethers } from "hardhat";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const ORACLE_ADDRESS = process.env.ORACLE_ADDRESS;

async function fetchFearAndGreedIndex(): Promise<number> {
    try {
        const response = await axios.get(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/fear-greed/stats',
            {
                headers: {
                    'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
                    'Accept': 'application/json'
                }
            }
        );

        // Get the latest fear & greed value (0-100)
        const fearAndGreedIndex = response.data.data.fear_and_greed.value;
        
        return fearAndGreedIndex;
    } catch (error) {
        console.error('Error fetching fear & greed index:', error);
        throw error;
    }
}

async function main() {
    if (!COINMARKETCAP_API_KEY || !ORACLE_ADDRESS) {
        throw new Error('Missing environment variables');
    }

    const oracle = await ethers.getContractAt('MarketSentimentOracle', ORACLE_ADDRESS);
    const [signer] = await ethers.getSigners();

    // Get the current fear & greed index
    const fearAndGreedIndex = await fetchFearAndGreedIndex();
    
    // Update the oracle
    const tx = await oracle.connect(signer).updateSentiment(
        fearAndGreedIndex
    );
    
    await tx.wait();
    console.log(`Updated Fear & Greed Index: ${fearAndGreedIndex}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 