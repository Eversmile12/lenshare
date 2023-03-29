import type { PlasmoMessaging } from "@plasmohq/messaging";

import { AppStorage, storage } from "~handlers/storageHandler";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { id, data, area } = req.body;

  await AppStorage.store(id, data, area ? area : null);

  res.send({
    response: true,
  });
};
export default handler;
