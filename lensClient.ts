import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { sendToBackground } from "@plasmohq/messaging";
import { GraphQLClient } from "graphql-request";
import { storage } from "~handlers/storageHandler";
import { getSdk } from "./.graphql/generated";
const APIURL = "https://api.lens.dev/";

// export const verifyOrRefreshTokens = async () => {
//   const currentAccessToken = await storage.retrieve("accessToken");
//   const currentRefreshToken = await storage.retrieve("refreshToken");

//   console.log("ACCESS_TOKEN", currentAccessToken);
//   console.log("REFRESH_TOKEN", currentRefreshToken);

//   if (!currentAccessToken?.length && !currentRefreshToken?.length) {
//     return {
//       accessToken: null,
//       refreshToken: null,
//       isConnected: false,
//       message: "",
//     };
//   }
//   const { verify } = await lensClient.Verify({
//     request: { accessToken: currentAccessToken },
//   });

//   if (verify) {
//     return {
//       accessToken: currentAccessToken,
//       refreshToken: currentRefreshToken,
//       isConnected: true,
//       message: "SUCCESS: access token verified",
//     };
//   }

//   const { accessToken, refreshToken } = await (
//     await lensClient.Refresh({ request: { refreshToken: currentAccessToken } })
//   ).refresh;

//   console.log("ACCESS_TOKEN", accessToken);
//   console.log("REFRESH_TOKEN", refreshToken);

//   if (!accessToken.length && !refreshToken.length) {
//     return {
//       accessToken: null,
//       refreshToken: null,
//       isConnected: false,
//       message: "FAILED: refresh token is expired",
//     };
//   }
//   await storage.store("accessToken", accessToken);
//   await storage.store("refreshToken", refreshToken);

//   return {
//     accessToken,
//     refreshToken,
//     isConnected: true,
//     message: "Tokens refreshed",
//   };
// };

// const middleware = async (request: RequestInit) => {
//   // @ts-ignore
//   const operationName = request.operationName;
//   if (
//     operationName === "Challenge" ||
//     operationName === "Authenticate" ||
//     operationName === "Refresh"
//   ) {
//     return request;
//   }
//   console.log("running middleware");
//   const { accessToken, isConnected } = await verifyOrRefreshTokens();

//   if (isConnected) {
//     return {
//       ...request,
//       headers: {
//         ...request.headers,
//         "x-access-token": accessToken ? `Bearer ${accessToken}` : "",
//       },
//     };
//   } else {
//     return {
//       ...request,
//     };
//   }
// };



const client = new ApolloClient({ uri: APIURL, cache: new InMemoryCache() });

export const lensClient = client;
