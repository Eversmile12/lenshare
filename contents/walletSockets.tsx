import type { PlasmoCSConfig } from "plasmo"
import { useEffect } from "react"

import { WalletHandler } from "~handlers/walletHandler"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  world: "MAIN"
}

const CustomButton = () => {
  useEffect(() => {
    window.web3.currentProvider.on("accountsChanged", (accounts) => {
      const walletHandler = new WalletHandler()
      walletHandler.logout()
    })
  })
  return <></>
}

export default CustomButton
