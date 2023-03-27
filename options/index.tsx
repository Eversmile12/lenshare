import { useEffect, useState } from "react";
import { ProfileImage } from "~components/profileImage";
import { storage } from "~handlers/storageHandler";
import { sendToBackground } from "@plasmohq/messaging";
import "~style.css";
import "~base.css";
import { SettingBlock } from "~components/settingBlock";
import { MainButton } from "~components/button";
import { NavBar } from "./navbar";

function OptionsIndex() {
  const [isEveryoneCanCollect, setIsEveryoneCanCollect] = useState("");
  const [isUseDispatcher, setIsUseDispatcher] = useState("");
  const [isLoginOnLoad, setIsLoginOnload] = useState("");
  const [isDirectBridge, setIsDirectBridge] = useState("");
  const [isNewFollowerNotification, setIsNewFollowerNotification] =
    useState("");
  const [isNewMirrorNotification, setIsNewMirrorNotification] = useState("");
  const [isNewCollectNotification, setIsNewCollectNotification] = useState("");
  const [isNewCommentNotification, setIsNewCommentNotification] = useState("");
  const [isNewMentionNotification, setIsNewMentionNotification] = useState("");
  const [isNewReactionNotification, setIsNewReactionNotification] =
    useState("");

  const [currentProfile, setCurrentProfile] = useState<any>();

  const [profileImage, setProfileImage] = useState<string>();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const initializeSettings = () => {
    const sIsEveryoneCanCollect = storage.retrieve("isEveryoneCanCollect");
    const sIsUseDispatecher = storage.retrieve("isUseDispatcher");
    const sIsLoginOnLoad = storage.retrieve("isLoginOnLoad");

    const sIsDirectBridge = storage.retrieve("isDirectBridge");
    const sIsNewFollowerNotification = storage.retrieve(
      "isNewFollowerNotification"
    );
    const sIsNewMirrorNotification = storage.retrieve(
      "isNewMirrorNotification"
    );
    const sisNewCollectNotification = storage.retrieve(
      "isNewCollectNotification"
    );
    const sisNewCommentNotification = storage.retrieve(
      "isNewCommentNotification"
    );
    const sIsNewMentionNotification = storage.retrieve(
      "isNewMentionNotification"
    );
    const sIsNewReactionNotification = storage.retrieve(
      "isNewReactionNotification"
    );
  };

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
    setCurrentProfile(profiles[0]);
    console.log("profile", profiles[0].handle);
  };

  useEffect(() => {
    if (!currentProfile) {
      console.log("fetching profile");
      getUserProfiles();
      getIsLogin();
    }
  }, []);

  useEffect(() => {
    if (currentProfile && currentProfile.picture?.original.url.length) {
      console.log("current", currentProfile);
      setProfileImage(getIpfsGatedURL(currentProfile.picture.original.url));
    }
  }, [currentProfile]);
  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      {currentProfile && (
        <div className="w-full flex-col flex items-center justify-center">
          <div className="w-[880px] flex items-center gap-5">
            <div>
              <ProfileImage profileImage={profileImage} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">@{currentProfile.handle}</h2>
              <div className="flex gap-5">
                <div className="flex gap-2 items-end">
                  <p className="text-md font-bold">
                    {currentProfile.stats.totalFollowers}
                  </p>
                  <p className="text-sm">Followers</p>
                </div>
                <div className="flex gap-2 items-end">
                  <p className="text-md font-bold">
                    {currentProfile.stats.totalFollowing}
                  </p>
                  <p className="text-sm">Following</p>
                </div>
              </div>
              <div>
                <div className="flex text-white gap-3">
                  <div className="w-21 h-21 bg-gray-800 rounded-md"></div>
                  <div className="w-21 h-21 bg-gray-800 rounded-md"></div>
                  <div className="w-21 h-21 bg-gray-800 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-gray-200 h-1 my-16"></div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex w-[880px] justify-evenly  gap-x-32">
              <div>
                <h3 className="text-lg font-bold mb-8">Application settings</h3>

                <div className={"flex flex-col gap-y-8 justify-evenly mb-8"}>
                  <SettingBlock
                    text={
                      "When active, only your followers can collect your content"
                    }
                    title={"Everyone can collect"}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-8">Application settings</h3>

                <div className={"flex flex-col gap-y-8 justify-evenly"}>
                  <SettingBlock
                    text={
                      "Allows Lens Bridge to sign transactions and pay for gas on your behalf"
                    }
                    title={"Use dispatcher"}
                  />
                  <SettingBlock
                    text={
                      "Opens your wallet to sign in when navigating to twitter"
                    }
                    title={"Login on load"}
                  />
                  <SettingBlock
                    text={"Automatically bridge your tweets to lens"}
                    title={"Direct bridge"}
                  />
                </div>
              </div>
            </div>
            <div className=" w-full bg-gray-200 h-1 my-16 "></div>
            <div className="flex w-[880px]">
              <div className="flex flex-col w-full">
                <h3 className="text-lg mb-8 font-bold">
                  Notifications settings
                </h3>
                <div className="flex justify-evenly w-full gap-x-32">
                  <div className={"flex flex-col gap-y-8"}>
                    <SettingBlock
                      className={""}
                      text={"Receive a notification when someone follows you"}
                      title={"New follower"}
                    />
                    <SettingBlock
                      className={""}
                      text={
                        "Receive a notification when someone mirrors your content "
                      }
                      title={"New mirror"}
                    />
                    <SettingBlock
                      className={""}
                      text={
                        "Receive a notification when someone collects your content"
                      }
                      title={"New collect"}
                    />
                  </div>
                  <div className={"flex flex-col  gap-y-8"}>
                    <SettingBlock
                      text={
                        "Receive a notification when someone comments your content"
                      }
                      title={"New comment"}
                    />
                    <SettingBlock
                      text={"Receive a notification when someone mentions you"}
                      title={"New mention"}
                    />
                    <SettingBlock
                      text={
                        "Receive a notification when someone reacts to your content"
                      }
                      title={"New reaction"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-end w-[880px]">
            <MainButton variant="tertiary" text={"Donate"} />
          </div>
          {/* <div>
            <Accordion />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default OptionsIndex;
