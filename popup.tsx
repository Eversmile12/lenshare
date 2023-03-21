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
  const [currentProfile, setCurrentProfile] = useState<any>();
  const [profileImage, setProfileImage] = useState<string>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const getIpfsGatedURL = (ipfsURL: string): string => {
    const ipfsId = ipfsURL.split("//")[1];
    return `https://ipfs.filebase.io/ipfs/${ipfsId}`;
  };

  const getIsLogin = async () => {
    const storedisLogin = await storage.retrieve("isLogin");
    setIsLogin(Boolean(storedisLogin));
  };
  const getUserProfiles = async () => {
    const { profiles } = await sendToBackground({
      name: "getUserProfiles",
    });
    console.log(profiles);
    setCurrentProfile(profiles[0]);

    setProfileImage(getIpfsGatedURL(profiles[0].picture.original.url));
  };

  const login = async () => {
    console.log("logging in");
    await storage.store("wantsLogin", true);
    window.close();
  };

  const logout = async () => {
    await storage.store("accessToken", null);
    await storage.store("refreshToken", null);
    await storage.store("address", null);
    await storage.store("isLogin", false);
    await storage.store("wantsLogin", false);
    window.close();
  };

  useEffect(() => {
    if (!currentProfile) {
      getUserProfiles();
      getIsLogin();
    }
  }, []);
  return (
    <div className={style.popup_container}>
      {currentProfile && isLogin ? (
        <div className={style.info_container}>
          <div className="relative">
            <img className="w-20 h-20 rounded " src={profileImage} />
            <span className="top-0 right-0 absolute w-4 h-4 -mr-2 -mt-1 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <h3>@{currentProfile.handle}</h3>
          <div className={style.following_container}>
            <div className={style.followers_container}>
              <p>
                <strong>{currentProfile.stats.totalFollowers} </strong>
                <span>Followers</span>
              </p>
            </div>
            <div>
              <p>
                <strong> {currentProfile.stats.totalFollowing} </strong>
                <span>Following</span>
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              settings
            </button>
            <button
              type="button"
              onClick={logout}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <div className={style.info_container}>
          <img
            className="w-20 h-20 rounded "
            src={"https://via.placeholder.com/500"}
          />

          <h3>Welcome on Lenshare!</h3>
          <p>Start by connecting your account</p>

          <button
            type="button"
            className="text-white outline-none border-none bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Login with lens
          </button>
        </div>
      )}
    </div>
  );
};
export default IndexPopup;
