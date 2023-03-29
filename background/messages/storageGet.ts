import type { PlasmoMessaging } from "@plasmohq/messaging";
import { AppStorage, storage } from "~handlers/storageHandler";

import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types";

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeRequestProps,
  res
) => {
  const { id, area } = req.body;
  const object = await AppStorage.retrieve(id, area ? area : null);
  res.send({
    response: object,
  });
};

export default handler;
