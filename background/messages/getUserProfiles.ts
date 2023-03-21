import type { PlasmoMessaging } from "@plasmohq/messaging";

import { storage } from "~handlers/storageHandler";
import { lensClient } from "../../handlers/lensClient";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  const address = await storage.retrieve("address");

  if (!address) {
    res.send({
      message: "No profiles found for the given address",
      success: false,
    });
  }
  console.log("fetching profiles");
  const profiles = await lensClient.profiles(address);
  console.log(profiles)
  res.send(profiles);
};

export default handler;
