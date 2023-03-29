import type { PlasmoMessaging } from "@plasmohq/messaging";

import { AppStorage } from "~handlers/storageHandler";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  await AppStorage.store("isReentrant", false);
  await AppStorage.store("pollingTx", null);
  await AppStorage.store("needPostSignature", false);
  await AppStorage.store("postData", false, "local");
  await AppStorage.store("wantsLogin", false);
  await AppStorage.store("notifications", null, "local");
  await AppStorage.store("notificationsCursor", null, "local");

  res.send({ success: true });
};

export default handler;
