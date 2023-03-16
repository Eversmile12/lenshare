import type { PlasmoCSConfig } from "plasmo"

import { relayMessage, sendToBackground } from "@plasmohq/messaging"
import { relay } from "@plasmohq/messaging/relay"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}
export const relayer =  relay(
  {
    name: "storageGet" as const
  },
  async (req) => {
    console.log(req)
    const result = await sendToBackground(req)
    return result 
  }
)
