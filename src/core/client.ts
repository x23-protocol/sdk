import { createPublicClient, http, PublicClient } from "viem";
import { GraphQLClient } from "graphql-request";
import { X42Config } from "../types";

export class X42Client {
  public config: X42Config;
  public rpc: PublicClient;
  public gql: GraphQLClient;

  constructor(config: X42Config) {
    this.config = config;

    // Initialize Viem public client for on-chain reads
    this.rpc = createPublicClient({
      transport: http(config.rpcUrl),
    });

    // Initialize GraphQL client for subgraph queries
    this.gql = new GraphQLClient(config.subgraphUrl);
  }
}
