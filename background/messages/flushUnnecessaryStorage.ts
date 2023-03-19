import type { PlasmoMessaging } from "@plasmohq/messaging";

import { storage } from "~handlers/storageHandler";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  await storage.store("isReentrant", false);
  await storage.store("pollingTx", null);
  await storage.store("needPostSignature", false);
  await storage.store("postData", false);
  await storage.store("wantsLogin", false);
  res.send({ success: true });
};

export default handler;
