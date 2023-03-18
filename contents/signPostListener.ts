import { WalletHandler } from "~handlers/walletHandler";
import type { PlasmoCSConfig } from "plasmo";
import { sendToBackgroundViaRelay } from "@plasmohq/messaging";
import { LensHandler } from "~utils/lensHub";
import { BigNumber, ethers } from "ethers";
import { pollUntilIndexed } from "~utils/indexer";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
};

window.addEventListener("load", () => {
  setInterval(async () => {
    const { needPostSignature, postData, profileId } =
      await sendToBackgroundViaRelay({
        name: "needPostSignature",
      });
    if (needPostSignature) {
      const isReentrant = await sendToBackgroundViaRelay({
        name: "storageGet",
        body: {
          id: "isReentrant",
        },
      }).then((response) => response.response);
      if (isReentrant) return;

      const walletHandler = new WalletHandler();
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "isReentrant",
          data: true,
        },
      });
      const signature = await walletHandler.signTypeData(
        postData.typedData.domain,
        postData.typedData.types,
        postData.typedData.value
      );
      console.log("create post: signature", signature);

      const { v, r, s } = walletHandler.splitSignature(signature);
      const lensHandler = new LensHandler();
      const lensHub = await lensHandler.initializeSmartContract();

      const tx = await lensHub.postWithSig({
        profileId: postData.typedData.value.profileId,
        contentURI: postData.typedData.value.contentURI,
        collectModule: postData.typedData.value.collectModule,
        collectModuleInitData: postData.typedData.value.collectModuleInitData,
        referenceModule: postData.typedData.value.referenceModule,
        referenceModuleInitData:
          postData.typedData.value.referenceModuleInitData,
        sig: {
          v,
          r,
          s,
          deadline: postData.typedData.value.deadline,
        },
      });

      console.log(`: tx hash`, tx.hrash);

      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "pollingTx",
          data: true,
        },
      });
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "needPostSignature",
          data: false,
        },
      });
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "isReentrant",
          data: false,
        },
      });
      // await pollAndIndexPost(tx.hash, profileId);
    } else {
      return;
    }
  }, 500);
});
