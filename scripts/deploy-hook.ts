import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer details:", {
    address: deployer.address,
    balance: ethers.formatEther(await deployer.provider.getBalance(deployer.address)) + " ETH"
  });

  const POOL_MANAGER_ADDRESS = process.env.POOL_MANAGER_ADDRESS; // Get from .env after poolmanager deployment
  const ORACLE_ADDRESS = process.env.ORACLE_ADDRESS; // Get from .env after oracle deployment

  if (!ORACLE_ADDRESS) {
    throw new Error("Missing ORACLE_ADDRESS in environment variables");
  }

  if (!ethers.isAddress(POOL_MANAGER_ADDRESS)) {
    throw new Error("Missing POOL_MANAGER_ADDRESS in environment variables");
  }

  console.log("Using addresses:", {
    poolManager: POOL_MANAGER_ADDRESS,
    oracle: ORACLE_ADDRESS
  });

  console.log("Deploying MarketSentimentHook...");
  
  const MarketSentimentHook = await ethers.getContractFactory("MarketSentimentHook");
  const hook = await MarketSentimentHook.deploy(
    POOL_MANAGER_ADDRESS,
    ORACLE_ADDRESS
  );
  
  console.log("Waiting for deployment transaction...");
  await hook.waitForDeployment();

  const hookAddress = await hook.getAddress();
  console.log("MarketSentimentHook deployed to:", hookAddress);

  console.log("\nVerifying contract on explorer...");
  console.log("Note: Wait for a few block confirmations before verifying");
  console.log(`npx hardhat verify --network unichain-sepolia ${hookAddress} ${POOL_MANAGER_ADDRESS} ${ORACLE_ADDRESS}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 