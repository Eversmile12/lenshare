import type { PlasmoCSConfig } from "plasmo"

import { relayMessage, sendToBackground } from "@plasmohq/messaging"
import { relay } from "@plasmohq/messaging/relay"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}
export const relayer =  relay(
  {
    name: "getChallenge" as const
  },
  async (req) => {
    console.log("sending challenge")
    return await sendToBackground(req)
  }
)
