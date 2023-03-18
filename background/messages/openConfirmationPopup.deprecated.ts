import type { PlasmoMessaging } from "@plasmohq/messaging"

import { storage } from "~handlers/storageHandler"
import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types"

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {

    chrome.windows.create({
        focused: false,
        height: 350,
        left: 50,
        url: chrome.runtime.getURL("postConfirm.html")
      },()=>{})
  res.send({
    success: true
  })
}

export default handler
