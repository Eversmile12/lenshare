import type { PlasmoMessaging } from "@plasmohq/messaging"

import { storage } from "~handlers/storageHandler"
import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types"

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeRequestProps,
  res
) => {
  console.log(req)
  await storage.store(req.body.id, req.body.data)

  res.send({
    response: true
  })
}
export default handler
