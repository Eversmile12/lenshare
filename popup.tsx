import { useEffect, useState } from "react";
import { useStorage } from "@plasmohq/storage/hook";
import infoCircle from "data-base64:~assets/info_circle.png";

import { sendToBackground } from "@plasmohq/messaging";

import { storage } from "~handlers/storageHandler";

import "~style.css";
import "~base.css";
import { ProfileImage } from "~components/profileImage";
import { MainButton } from "~components/button";
import { PopupLayout } from "~layouts/main.l";

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
    <PopupLayout width={"300"} height={"500"}>
      {currentProfile && isLogin ? (
        <div className={"flex flex-col w-full justify-center"}>
          <div className="flex flex-col justify-center items-center mb-3 gap-2">
            <ProfileImage profileImage={profileImage} />
            <div className="flex gap-10 justify-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-md font-bold">
                  {currentProfile.stats.totalFollowers}
                </p>
                <p>Followers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-md font-bold">
                  {currentProfile.stats.totalFollowing}
                </p>
                <p>Following</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-center mb-5">
            <MainButton variant="secondary" text={"Settings"} />
            <MainButton text={"New post"} />
          </div>
          <div className="w-full flex justify-center mb-3">
            <div className="bg-gray-900 w-full rounded-lg p-4 h-120">
              <h2 className="text-white text-lg">Loved by the community</h2>
              <div className="flex text-white gap-6">
                <div className="w-50 h-50 bg-gray-500 rounded-lg">
                  <p>Lorem</p>
                  {/* <img></img> */}
                </div>
                <div className="w-50 h-50 bg-gray-500 rounded-lg">
                  <p>Lorem</p>
                  {/* <img></img> */}
                </div>
                <div className="w-50 h-50 bg-gray-500 rounded-lg">
                  <p>Lorem</p>
                  {/* <img></img> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-3">
            <div className="flex items-center gap-2 bg-gray-900 w-full rounded-lg p-2 ">
              <div className="w-30 h-30 bg-gray-500 rounded-lg">
                {/* <img></img> */}
              </div>
              <p className="text-white">Achievements</p>
            </div>
          </div>
          <div className="flex justify-end">
            <MainButton variant="tertiary" text={"Donate"} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full justify-center gap-y-3">
          <ProfileImage profileImage={""} />

          <h3>Login to start cross-posting on lens</h3>
          <div className="flex w-full justify-evenly">
            <MainButton variant={"secondary"} text={"Docs"} />
            <div className="relative">
              <img
                src={infoCircle}
                className={"absolute top-0 right-0 -mt-1 -mr-1"}
                width={15}
                height={15}
              ></img>

              <MainButton text={"Login"} />
            </div>
          </div>
        </div>
      )}
    </PopupLayout>
  );
};
export default IndexPopup;
