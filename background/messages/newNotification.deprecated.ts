import type { PlasmoMessaging } from "@plasmohq/messaging";
import { storage } from "~handlers/storageHandler";

import { TwitterHandler } from "~twitter/twitterHandler";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  chrome.notifications.create(req.body);

  res.send({success:true });
};

export default handler;
