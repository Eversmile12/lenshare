import type { PlasmoCSConfig } from "plasmo"

import { sendToBackground } from "@plasmohq/messaging"
import { relay } from "@plasmohq/messaging/relay"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}
export const relayer = relay(
  {
    name: "getUserProfiles" as const
  }, 
  async (req) => {

    return await sendToBackground(req)
  }
)