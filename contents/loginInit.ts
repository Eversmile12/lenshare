import type { PlasmoCSConfig } from "plasmo";


import { WalletHandler } from "~handlers/walletHandler";

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"],
  all_frames: true,
  world: "MAIN",
};

window.addEventListener("load", async () => {
  const walletHandler = new WalletHandler();
  await walletHandler.login();
});


