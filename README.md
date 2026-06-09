# @x42/sdk

The official TypeScript SDK for interacting with the 42 Spaces protocol.

## Features
- **Type-safe Contracts**: Ready to use viem integration with generated ABIs.
- **Subgraph Indexing**: High-level abstractions for querying on-chain states natively.
- **Modular**: Only import what you need.

## Installation
```bash
npm install @x42/sdk
```

## Quick Start
```typescript
import { X42SDK } from "@x42/sdk";

// Initialize SDK
const sdk = new X42SDK({
  rpcUrl: "https://testrpc.xlayer.tech",
  subgraphUrl: "https://api.studio.thegraph.com/query/.../graphql",
  chainId: 195,
}, "0xRouterAddress");

// Fetch Top Markets
async function fetchMarkets() {
  const data = await sdk.indexer.getMarkets(10, 0);
  console.log(data);
}

// Encode a Trade (to be signed by user wallet using viem/wagmi)
const txData = sdk.market.encodeSwap(
  "0xMarketAddress",
  "0xReceiverAddress",
  0n, // tokenId (outcomeIndex)
  {
    isMint: true,
    amount: 100000000n,
    isExactIn: true,
    minOutOrMaxIn: 0n,
  },
  "0x", // dataSwap
  "0x", // dataGuess
  "0x0000000000000000000000000000000000000000", // integrator
  0n // integratorFeeBps
);
```
