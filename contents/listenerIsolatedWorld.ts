import { sendToBackground } from "@plasmohq/messaging";
import type { PlasmoCSConfig } from "plasmo";
import { AppStorage, storage } from "~handlers/storageHandler";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
};

window.addEventListener("load", () => {
  setInterval(async () => {
    const isLogin = AppStorage.retrieve("isLogin");
    if (isLogin) {
      await sendToBackground({
        name: "getUserNotifications",
      });
    }
  }, 12000);
});
