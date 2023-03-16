
import type { PlasmoMessaging } from "@plasmohq/messaging"
import { storage } from "~handlers/storageHandler"

import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types"

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeRequestProps,
  res
) => {
  console.log(req)
  const object = await storage.retrieve(req.body.id)
  
  res.send({
    response: object
  })
}

export default handler
