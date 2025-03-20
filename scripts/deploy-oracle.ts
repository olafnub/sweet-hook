import { ethers } from "hardhat";

async function main() {
  // Get the deployer's signer
  const [deployer] = await ethers.getSigners();
  console.log("Deployer details:", {
    address: deployer.address,
    balance: ethers.formatEther(await deployer.provider.getBalance(deployer.address)) + " ETH"
  });

  console.log("Deploying MarketSentimentOracle...");
  
  // Deploy the Oracle contract
  const MarketSentimentOracle = await ethers.getContractFactory("MarketSentimentOracle");
  const oracle = await MarketSentimentOracle.deploy();
  
  console.log("Waiting for deployment transaction...");
  await oracle.waitForDeployment();

  const oracleAddress = await oracle.getAddress();
  console.log("MarketSentimentOracle deployed to:", oracleAddress);

  // Verify deployment
  console.log("\nVerifying contract on explorer...");
  console.log("Note: Wait for a few block confirmations before verifying");
  console.log(`npx hardhat verify --network unichain-sepolia ${oracleAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 