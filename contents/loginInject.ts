import { WalletHandler } from "~handlers/walletHandler";
import { relay } from "@plasmohq/messaging/relay";
import type { PlasmoCSConfig } from "plasmo";
import { sendToBackgroundViaRelay } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
};

window.addEventListener("load", () => {
  setInterval(async () => {
    const { wantsLogin } = await sendToBackgroundViaRelay({
      name: "wantsLogin",
    });
    if (wantsLogin) {
      const walletHandler = new WalletHandler();
      await walletHandler.login();
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "wantsLogin",
          data: false,
        },
      });
    }
    console.log(wantsLogin);
  }, 3000);
});
