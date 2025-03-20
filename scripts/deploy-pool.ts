import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer details:", {
    address: deployer.address,
    balance: ethers.formatEther(await deployer.provider.getBalance(deployer.address)) + " ETH"
  });

  // Token addresses for Unichain Sepolia (you'll need to verify these)
  const WETH_ADDRESS = "0x4200000000000000000000000000000000000006";  // SEPOLIA WETH
  const USDC_ADDRESS = "0x31d0220469e10c4E71834a79b1f276d740d3768F";  // SEPOLIA USDC

  // Deploy PoolManager
  console.log("Deploying PoolManager...");
  const PoolManager = await ethers.getContractFactory("PoolManager");
  const poolManager = await PoolManager.deploy();
  await poolManager.waitForDeployment();
  
  const poolManagerAddress = await poolManager.getAddress();
  console.log("PoolManager deployed to:", poolManagerAddress);

  // Create Pool
  console.log("Creating WETH/USDC pool...");
  
  const poolKey = {
    currency0: WETH_ADDRESS,  // Make sure WETH is the lower address
    currency1: USDC_ADDRESS,
    fee: 300,  // 0.03% fee tier
    tickSpacing: 60,
    hooks: ethers.ZeroAddress  // No hooks for now
  };

  // Initialize pool with specific price and tick
  const sqrtPriceX96 = "79228162514264337593543950336";  // Example initial price
  
  const initTx = await poolManager.initialize(
    poolKey,
    sqrtPriceX96,
    "0x"  // No hook initialization data
  );
  
  await initTx.wait();
  console.log("Pool initialized!");

  // Log deployment info
  console.log("\nDeployment Summary:");
  console.log("PoolManager:", poolManagerAddress);
  console.log("WETH:", WETH_ADDRESS);
  console.log("USDC:", USDC_ADDRESS);
  
  // Verification command
  console.log("\nTo verify PoolManager:");
  console.log(`npx hardhat verify --network unichain-sepolia ${poolManagerAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 