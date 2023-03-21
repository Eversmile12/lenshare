import type { PlasmoMessaging } from "@plasmohq/messaging";

import { storage } from "~handlers/storageHandler";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { id, data } = req.body;

  await storage.store(id, data);

  res.send({
    response: true,
  });
};
export default handler;
