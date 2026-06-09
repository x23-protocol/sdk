import { createPublicClient, http, parseAbiItem } from 'viem';
import { xlayerTestnet } from 'viem/chains';

const client = createPublicClient({
  chain: xlayerTestnet,
  transport: http('https://testrpc.xlayer.tech')
});

async function main() {
  const result = await client.readContract({
    address: '0x9F77e3b5bf3Ce7852e3588f2885422a02b14068C',
    abi: parseAbiItem('function collateral() view returns (address)'),
    functionName: 'collateral'
  });
  console.log(result);
}

main().catch(console.error);
