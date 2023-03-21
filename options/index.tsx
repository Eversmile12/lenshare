import { useEffect, useState } from "react";
import { useStorage } from "@plasmohq/storage/hook";

import { sendToBackground } from "@plasmohq/messaging";

import { storage } from "~handlers/storageHandler";
import { WalletHandler } from "~handlers/walletHandler";

import * as style from "./styles/popup.module.css";

import "~style.css";
import "~base.css";

function IndexPopup() {
  const [isPopup] = useStorage<boolean>("isPopup");

  return <>{isPopup ? <PopupWindow /> : <ExtensionWindow />}</>;
}
export const PopupWindow = () => {
  return (
    <div>
      <h1>Let's go popups!</h1>
    </div>
  );
};
export const ExtensionWindow = () => {
  
  return (
    <div className={style.popup_container}>
     
    </div>
  );
};
export default IndexPopup;
