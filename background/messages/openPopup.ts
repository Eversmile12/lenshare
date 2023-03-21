import type { PlasmoMessaging } from "@plasmohq/messaging";
import { storage } from "~handlers/storageHandler";

import { TwitterHandler } from "~handlers/twitterHandler";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { relativeUrl, left, popupText, tweetText } = req.body;
  await storage.store("popupText", popupText ? popupText : "Review and edit your post before publishing it!");

  if (tweetText?.length) await storage.store("tweetText", tweetText);

  chrome.windows.create({
    url: relativeUrl,
    width: 400,
    height: 600,
    left: left,
    focused: false,
    type: "panel",
  });
  res.send({
    success: true,
  });
};

export default handler;
