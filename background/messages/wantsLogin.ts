
import type { PlasmoMessaging } from "@plasmohq/messaging"
import { storage } from "~handlers/storageHandler"

import { TwitterHandler } from "~twitter/twitterHandler"

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  const wantsLogin = await storage.retrieve("wantsLogin")
  console.log(wantsLogin)
  res.send({
    wantsLogin: wantsLogin
  })
}

export default handler
