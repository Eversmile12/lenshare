import { useEffect, useState } from "react";
import { ProfileImage } from "~components/profileImage";
import { AppStorage } from "~handlers/storageHandler";
import { sendToBackground } from "@plasmohq/messaging";
import "~style.css";
import "~base.css";
import { SettingBlock } from "~options/settingBlock";
import { MainButton } from "~components/button";
import { NavBar } from "./navbar";

function OptionsIndex() {
  const [currentProfile, setCurrentProfile] = useState<any>();
  const [profileImage, setProfileImage] = useState<string>();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const getIpfsGatedURL = (ipfsURL: string): string => {
    const ipfsId = ipfsURL.split("//")[1];
    return `https://ipfs.filebase.io/ipfs/${ipfsId}`;
  };
  const getIsLogin = async () => {
    const storedisLogin = await AppStorage.retrieve("isLogin");
    setIsLogin(Boolean(storedisLogin));
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
    setCurrentProfile(profiles[0]);
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

      <div className="w-full flex-col flex items-center justify-center">
        <div className={`w-[880px] flex items-center gap-5 relative`}>
          <div>
            <ProfileImage
              className={!currentProfile && "opacity-20"}
              profileImage={profileImage}
            />
            {!currentProfile && (
              <div className="absolute top-[30%] left-[10%] z-50">
                <MainButton text={"Login"} callback={null}></MainButton>
              </div>
            )}
          </div>
          <div
            className={`flex flex-col gap-2 ${!currentProfile && "opacity-20"}`}
          >
            <h2 className="text-lg font-bold">
              @
              {currentProfile
                ? currentProfile.handle.split(".")[0]
                : "Your handle"}
            </h2>
            <div className="flex gap-5">
              <div className="flex gap-2 items-end">
                <p className="text-md font-bold">
                  {currentProfile
                    ? currentProfile.stats.totalFollowers
                    : "10,000"}
                </p>
                <p className="text-sm">Followers</p>
              </div>
              <div className="flex gap-2 items-end">
                <p className="text-md font-bold">
                  {currentProfile
                    ? currentProfile.stats.totalFollowing
                    : "10,000"}
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
              <h3 className="text-lg font-bold mb-8">Profile settings</h3>

              <div className={"flex flex-col gap-y-8 justify-evenly mb-8"}>
                <SettingBlock
                  settingId={"isEveryoneCanCollect"}
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
                  settingId={"isUseDispatcher"}
                  text={
                    "Allows Lens Bridge to sign transactions and pay for gas on your behalf"
                  }
                  title={"Use dispatcher"}
                />
                <SettingBlock
                  settingId={"isLoginOnLoad"}
                  text={
                    "Opens your wallet to sign in when navigating to twitter"
                  }
                  title={"Login on load"}
                />
                <SettingBlock
                  settingId={"isDirectBridge"}
                  text={"Automatically bridge your tweets to lens"}
                  title={"Direct bridge"}
                />
              </div>
            </div>
          </div>
          <div className=" w-full bg-gray-200 h-1 my-16 "></div>
          <div className="flex w-[880px]">
            <div className="flex flex-col w-full">
              <h3 className="text-lg mb-8 font-bold">Notifications settings</h3>
              <div className="flex justify-evenly w-full gap-x-32">
                <div className={"flex flex-col gap-y-8"}>
                  <SettingBlock
                    settingId={"isNewFollowerNotification"}
                    text={"Receive a notification when someone follows you"}
                    title={"New follower"}
                  />
                  <SettingBlock
                    settingId={"isNewCollectNotification"}
                    text={
                      "Receive a notification when someone mirrors your content "
                    }
                    title={"New mirror"}
                  />
                  <SettingBlock
                    settingId={"isNewCommentNotification"}
                    text={
                      "Receive a notification when someone collects your content"
                    }
                    title={"New collect"}
                  />
                </div>
                <div className={"flex flex-col  gap-y-8"}>
                  <SettingBlock
                    settingId={"isNewCommentNotification"}
                    text={
                      "Receive a notification when someone comments your content"
                    }
                    title={"New comment"}
                  />
                  <SettingBlock
                    settingId={"isNewMentionNotification"}
                    text={"Receive a notification when someone mentions you"}
                    title={"New mention"}
                  />
                  <SettingBlock
                    settingId={"isNewReactionNotification"}
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
          <MainButton callback={null} variant="tertiary" text={"Donate"} />
        </div>
        {/* <div>
            <Accordion />
          </div> */}
      </div>
    </div>
  );
}

export default OptionsIndex;
