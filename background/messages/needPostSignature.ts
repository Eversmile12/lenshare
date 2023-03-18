import type { PlasmoMessaging } from "@plasmohq/messaging";
import { storage } from "~handlers/storageHandler";

import { TwitterHandler } from "~twitter/twitterHandler";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  const needPostSignature = await storage.retrieve("needPostSignature");
  let postData;
  let profileId;
  if (needPostSignature) {
    profileId = await storage.retrieve("profileId");
    postData = await storage.retrieve("postData");
  }

  res.send({
    needPostSignature,
    postData: postData ? postData : null,
    profileId: profileId ? profileId : null,
  });
};

export default handler;
