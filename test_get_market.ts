import { createPublicClient, http } from 'viem';
import { xlayerTestnet } from 'viem/chains';
import { FTControllerV2ABI } from './src/abis/FTControllerV2ABI.ts';

const client = createPublicClient({
  chain: xlayerTestnet,
  transport: http('https://testrpc.xlayer.tech')
});

async function main() {
  const market = await client.readContract({
    address: '0x08CDeB8914AeE9eCa91FA6bF916903d9265Ab4d8',
    abi: FTControllerV2ABI,
    functionName: 'getMarket',
    args: ['0x9F77e3b5bf3Ce7852e3588f2885422a02b14068C']
  });
  console.log(market);
}

main().catch(console.error);
