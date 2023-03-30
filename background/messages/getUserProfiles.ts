import type { PlasmoMessaging } from "@plasmohq/messaging";

import { lensClient } from "../../handlers/lensClient";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log(req.body)
  const { address } = req.body;

  if (!address) {
    res.send({
      message: "No profiles found for the given address",
      success: false,
    });
  }
  console.log("fetching profiles");
  const profiles = await lensClient.profiles(address);
  res.send(profiles);
};

export default handler;
