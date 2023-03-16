import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"

import { sendToBackgroundViaRelay } from "@plasmohq/messaging"

import { WalletHandler } from "~handlers/walletHandler"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"],
  all_frames: true,
  world: "MAIN"
}


window.addEventListener("load", async () => {
  const walletHandler = new WalletHandler()
  console.log("logging in")
  await walletHandler.login()
  const address = await walletHandler.getAddress()
  console.log("address", address)
})
