import { sendToBackgroundViaRelay } from "@plasmohq/messaging";
import type { PlasmoCSConfig } from "plasmo";

import { WalletHandler } from "~handlers/walletHandler";

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"],
  all_frames: true,
  world: "MAIN",
};

window.addEventListener("load", async () => {
  const isLogin = await sendToBackgroundViaRelay({
    name: "storageGet",
    body: {
      id: "isLogin",
    },
  }).then((data) => data.response);
  const isLoginOnLoad = await sendToBackgroundViaRelay({
    name: "storageGet",
    body: {
      id: "isLoginOnLoad",
    },
  }).then((data) => data.response);
  if (isLogin || !isLoginOnLoad) return;

  await sendToBackgroundViaRelay({
    name: "flushUnnecessaryStorage",
  });
  const walletHandler = new WalletHandler();
  await walletHandler.loginAndInitSettings();
});
