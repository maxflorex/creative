import { GraphQLClient } from "graphql-request";

const url: any = process.env.CONTENT_API;
const token: any = process.env.TOKEN_API;

export const graphcms = new GraphQLClient(url, {
    headers: {
        Authorization: token,
    },
});
