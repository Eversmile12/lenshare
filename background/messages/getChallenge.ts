import type { PlasmoMessaging } from "@plasmohq/messaging";
import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types";
import { lensClient } from "../../handlers/lensClient";

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeRequestProps,
  res
) => {
  const { address } = req.body;
  console.log("requesting challenge for", address);

  res.send({
    ...(await lensClient.getChallenge(address)),
  });
};

export default handler;
