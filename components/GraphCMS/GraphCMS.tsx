import { GraphQLClient } from "graphql-request";

const url: any = process.env.CONTENT_API;
const token: any = process.env.TOKEN_API;

export const graphcms = new GraphQLClient("https://api-us-west-2.graphcms.com/v2/cl56w9xj445hn01upeb63h72u/master");
