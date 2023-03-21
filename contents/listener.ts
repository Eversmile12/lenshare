import { WalletHandler } from "~handlers/walletHandler";

import type { PlasmoCSConfig } from "plasmo";
import { sendToBackgroundViaRelay } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
};

window.addEventListener("load", () => {
  setInterval(async () => {
    const wantsLogin = await sendToBackgroundViaRelay({
      name: "storageGet",
      body: {
        id: "wantsLogin",
      },
    }).then((data) => data.response);
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
      return;
    }

    const isPosting = await sendToBackgroundViaRelay({
      name: "storageGet",
      body: {
        id: "isPosting",
      },
    }).then((data) => data.response);
    const postTypedData = await sendToBackgroundViaRelay({
      name: "storageGet",
      body: {
        id: "postTypedData",
      },
    }).then((data) => data.response);
    if (isPosting) {
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "isPosting",
          data: false,
        },
      });
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "postTypedData",
          data: null,
        },
      });
      const walletHandler = new WalletHandler();
      const tx = walletHandler.signPostData(postTypedData);
      console.log(tx);
    }
  }, 1500);
});
