import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    'unichain-sepolia': {
      url: 'https://unichain-sepolia-rpc.publicnode.com',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  paths: {
    sources: "./src",    // Add this section
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  // etherscan: {
  //   customChains: [
  //     {
  //       network: "unichain-sepolia",
  //       chainId: 5,
  //       urls: {
  //         apiURL: "https://api-goerli.etherscan.io/api",
  //         browserURL: "https://goerli.etherscan.io"
  //       }
  //     }
  //   ]
  // }
};

export default config;