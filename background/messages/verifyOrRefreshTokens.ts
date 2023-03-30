import type { PlasmoMessaging } from "@plasmohq/messaging";

import { AppStorage, storage } from "~handlers/storageHandler";
import { lensClient } from "~handlers/lensClient";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  console.log("verifying tokens");

  const currentAccessToken = await AppStorage.retrieve("accessToken");
  const currentRefreshToken = await AppStorage.retrieve("refreshToken");

  console.log("ACCESS_TOKEN", currentAccessToken);
  console.log("REFRESH_TOKEN", currentRefreshToken);

  if (!currentAccessToken?.length && !currentRefreshToken?.length) {
    res.send({
      accessToken: null,
      refreshToken: null,
      isConnected: false,
      message: "",
    });
    return;
  }
  const { verify } = await lensClient.verify(currentAccessToken);

  if (verify) {
    res.send({
      accessToken: currentAccessToken,
      refreshToken: currentRefreshToken,
      isConnected: true,
      message: "SUCCESS: access token verified",
    });
  }

  const { accessToken, refreshToken } = await await lensClient.refresh(
    currentRefreshToken
  );

  if (!accessToken.length && !refreshToken.length) {
    res.send({
      accessToken: null,
      refreshToken: null,
      isConnected: false,
      message: "FAILED: refresh token is expired",
    });
  }
  await AppStorage.store("accessToken", accessToken);
  await AppStorage.store("refreshToken", refreshToken);

  res.send({
    accessToken,
    refreshToken,
    isConnected: true,
    message: "Tokens refreshed",
  });
};

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
//   const { accessToken, isConnected } = await lensClient();

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

export default handler;
