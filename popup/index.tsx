import { useEffect, useState } from "react";
import { useStorage } from "@plasmohq/storage/hook";
import infoCircle from "data-base64:~assets/info_circle.png";

import { sendToBackground } from "@plasmohq/messaging";

import { AppStorage, storage } from "~handlers/storageHandler";

import "~style.css";
import "~base.css";
import { ProfileImage } from "~components/profileImage";
import { MainButton } from "~components/button";
import { PopupLayout } from "~popup/layouts/popupLayout";
import { DropdownMenu } from "~popup/dropdownMenu";
import { NotificationWindow } from "./notificationsWindow";

function IndexPopup() {
  const [isPopup] = useStorage<boolean>("isPopup");

  return (
    <>
      {" "}
      <ExtensionWindow />
    </>
  );
}

export const ExtensionWindow = () => {
  const [currentProfile, setCurrentProfile] = useState<any>();
  const [profileImage, setProfileImage] = useState<string>();
  const [isLogin] = useStorage<string>("isLogin");
  const [isNotificationsViewVisible, setIsNotificationsViewVisible] =
    useState(false);
  const getIpfsGatedURL = (ipfsURL: string): string => {
    const ipfsId = ipfsURL.split("//")[1];
    return `https://ipfs.filebase.io/ipfs/${ipfsId}`;
  };

  const getUserProfiles = async () => {
    const address = await sendToBackground({
      name: "storageGet",
      body: {
        id: "address",
      },
    }).then((data) => data.response);
    const { profiles } = await sendToBackground({
      name: "getUserProfiles",
      body: {
        address: address,
      },
    });
    console.log("profile", profiles);
    setCurrentProfile(profiles[0]);
    setProfileImage(getIpfsGatedURL(profiles[0].picture.original.url));
  };

  const login = async () => {
    console.log("logging in");
    await AppStorage.store("wantsLogin", true);
    window.close();
  };

  const openSettings = () => {
    chrome.runtime.openOptionsPage();
  };

  useEffect(() => {
    if (!currentProfile && isLogin) {
      console.log("getting profile");
      getUserProfiles();
    }
  }, [isLogin]);


  return (
    <PopupLayout width={"300"} height={"500"}>
      {currentProfile && isLogin ? (
        <div className={"flex flex-col w-full justify-center"}>
          <div className="flex flex-col justify-center items-center mb-3 gap-2">
            <div
            // onClick={() =>
            //   setIsNotificationsViewVisible(!isNotificationsViewVisible)
            // }
            >
              <ProfileImage
                callback={() => {
                  setIsNotificationsViewVisible(!isNotificationsViewVisible);
                }}
                profileImage={profileImage}
              />
            </div>
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
            <MainButton
              callback={openSettings}
              variant="secondary"
              text={"Settings"}
            />
            <MainButton callback={null} text={"New post"} />
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
            <MainButton callback={null} variant="tertiary" text={"Donate"} />
          </div>
          <DropdownMenu />
          <NotificationWindow isVisible={isNotificationsViewVisible} />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full justify-center gap-y-3">
          <ProfileImage profileImage={""} />

          <h3>Login to start cross-posting on lens</h3>
          <div className="flex w-full justify-evenly">
            <MainButton callback={null} variant={"secondary"} text={"Docs"} />
            <div className="relative">
              <img
                src={infoCircle}
                className={"absolute top-0 right-0 -mt-1 -mr-1"}
                width={15}
                height={15}
              ></img>

              <MainButton callback={login} text={"Login"} />
            </div>
          </div>
        </div>
      )}
    </PopupLayout>
  );
};
export default IndexPopup;
