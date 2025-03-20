# Market Sentiment Dynamic Fee Hook

This is a Uniswap V4 hook that dynamically adjusts pool fees based on market sentiment data from CoinMarketCap. The hook DECREASES fees during bullish market conditions and INCREASES them during bearish conditions in order to optimize pool performance!

## Features

- Dynamic fee adjustment based on market sentiment
- Integration with CoinMarketCap API for real-time market data
- Configurable sentiment thresholds and fee ranges
- Pausable oracle for emergency situations
- Confidence scoring for sentiment data

## Prerequisites

- Node.js v16 or higher
- A CoinMarketCap API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sweet-hook.git
cd sweet-hook
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file and fill in your values:
```bash
cp .env.example .env
```

## Configuration

Edit the `.env` file with your values:
- `COINMARKETCAP_API_KEY`: Your CoinMarketCap API key
- `ORACLE_ADDRESS`: The deployed MarketSentimentOracle contract address
- `MAINNET_RPC_URL`: Your Ethereum node RPC URL
- `PRIVATE_KEY`: Your wallet private key (for deployment)

## Usage

### First deploy the poolmanager
```bash
npx hardhat run scripts/deploy-poolmanager.ts --network unichain-sepolia
```


### Then deploy the Contracts

1. Deploy the MarketSentimentOracle:
```bash
npx hardhat run scripts/deploy-oracle.ts --network mainnet
```

2. Deploy the MarketSentimentHook:
```bash
npx hardhat run scripts/deploy-hook.ts --network mainnet
```

3. Deploy the hook
```bash
npx hardhat run scripts/create-pool.ts --network unichain-sepolia
```

### Updating Market Sentiment

Run the script to update market sentiment data:
```bash
npm run update-sentiment
```

This script will:
1. Fetch current market data from CoinMarketCap
2. Calculate sentiment based on price and volume changes
3. Update the oracle contract with new sentiment values

### Fee Adjustment Logic

The hook adjusts fees based on the following rules:
- Base fee: 0.03%
- Maximum fee: 1%
- Minimum fee: 0.03%
- Bullish threshold: 70 (decreases fee by 20%)
- Bearish threshold: 30 (increases fee by 20%)

## Security Considerations

- The oracle is pausable in case of emergencies
- Sentiment data has a maximum age of 1 hour
- Confidence scoring helps filter out unreliable data
- Only the owner can update sentiment data

## License

MIT

# v4-template
### **A template for writing Uniswap v4 Hooks 🦄**

[`Use this Template`](https://github.com/uniswapfoundation/v4-template/generate)

1. The example hook [Counter.sol](src/Counter.sol) demonstrates the `beforeSwap()` and `afterSwap()` hooks
2. The test template [Counter.t.sol](test/Counter.t.sol) preconfigures the v4 pool manager, test tokens, and test liquidity.

<details>
<summary>Updating to v4-template:latest</summary>

This template is actively maintained -- you can update the v4 dependencies, scripts, and helpers: 
```bash
git remote add template https://github.com/uniswapfoundation/v4-template
git fetch template
git merge template/main <BRANCH> --allow-unrelated-histories
```

</details>

---

### Check Forge Installation
*Ensure that you have correctly installed Foundry (Forge) Stable. You can update Foundry by running:*

```
foundryup
```

> *v4-template* appears to be _incompatible_ with Foundry Nightly. See [foundry announcements](https://book.getfoundry.sh/announcements) to revert back to the stable build



## Set up

*requires [foundry](https://book.getfoundry.sh)*

```
forge install
forge test
```

### Local Development (Anvil)

Other than writing unit tests (recommended!), you can only deploy & test hooks on [anvil](https://book.getfoundry.sh/anvil/)

```bash
# start anvil, a local EVM chain
anvil

# in a new terminal
forge script script/Anvil.s.sol \
    --rpc-url http://localhost:8545 \
    --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \
    --broadcast
```

See [script/](script/) for hook deployment, pool creation, liquidity provision, and swapping.

---

<details>
<summary><h2>Troubleshooting</h2></summary>



### *Permission Denied*

When installing dependencies with `forge install`, Github may throw a `Permission Denied` error

Typically caused by missing Github SSH keys, and can be resolved by following the steps [here](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) 

Or [adding the keys to your ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent), if you have already uploaded SSH keys

### Hook deployment failures

Hook deployment failures are caused by incorrect flags or incorrect salt mining

1. Verify the flags are in agreement:
    * `getHookCalls()` returns the correct flags
    * `flags` provided to `HookMiner.find(...)`
2. Verify salt mining is correct:
    * In **forge test**: the *deployer* for: `new Hook{salt: salt}(...)` and `HookMiner.find(deployer, ...)` are the same. This will be `address(this)`. If using `vm.prank`, the deployer will be the pranking address
    * In **forge script**: the deployer must be the CREATE2 Proxy: `0x4e59b44847b379578588920cA78FbF26c0B4956C`
        * If anvil does not have the CREATE2 deployer, your foundry may be out of date. You can update it with `foundryup`

</details>

---

Additional resources:

[Uniswap v4 docs](https://docs.uniswap.org/contracts/v4/overview)

[v4-periphery](https://github.com/uniswap/v4-periphery) contains advanced hook implementations that serve as a great reference

[v4-core](https://github.com/uniswap/v4-core)

[v4-by-example](https://v4-by-example.org)

