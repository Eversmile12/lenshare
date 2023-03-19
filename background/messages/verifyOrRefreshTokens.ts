import type { PlasmoMessaging } from "@plasmohq/messaging";

import { storage } from "~handlers/storageHandler";
import { verifyOrRefreshTokens } from "~lensClient";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
    console.log("verifying tokens")
  res.send({ ...(await verifyOrRefreshTokens()) });
  
};

export default handler;
