import type { PlasmoMessaging } from "@plasmohq/messaging"

import { storage } from "~handlers/storageHandler"
import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types"

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {

  const response = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
  res.send({
    url: response[0].url
  })
}

export default handler
