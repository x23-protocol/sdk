import { createPublicClient, http, parseAbiItem } from 'viem';
import { xlayerTestnet } from 'viem/chains';
import { FTControllerV2ABI } from './src/abis/FTControllerV2ABI.ts';

const client = createPublicClient({
  chain: xlayerTestnet,
  transport: http('https://testrpc.xlayer.tech')
});

async function main() {
  const { request } = await client.simulateContract({
    address: '0x08CDeB8914AeE9eCa91FA6bF916903d9265Ab4d8',
    abi: FTControllerV2ABI,
    functionName: 'grantRole',
    args: ['0x97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929', '0xa803dfd7fae492bf700a3b77c13e1ad41191b3f0'],
    account: '0xa803dfd7fae492bf700a3b77c13e1ad41191b3f0'
  });
  console.log("request keys:", Object.keys(request));
  console.log("request.data:", request.data);
  console.log("request.to:", request.to);
  console.log("request.address:", request.address);
}

main().catch(console.error);
