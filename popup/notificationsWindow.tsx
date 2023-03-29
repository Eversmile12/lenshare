import { useStorage } from "@plasmohq/storage/hook";
import { Storage } from "@plasmohq/storage";
import { useEffect, useState } from "react";

export const NotificationWindow = ({ isVisible }) => {
  const [notifications] = useStorage<any>({
    key: "notifications",
    instance: new Storage({
      area: "local",
    }),
  });
  const [parsedNotification, setParseNotifications] = useState<any[]>();
  useEffect(() => {
    if (notifications) {
      setParseNotifications(JSON.parse(notifications));
      console.log(JSON.parse(notifications));
    }
  }, [notifications]);
  const getIpfsGatedURL = (ipfsURL: string): string => {
    const ipfsId = ipfsURL.split("//")[1];
    return `https://ipfs.filebase.io/ipfs/${ipfsId}`;
  };
  return (
    <div className={`absolute flex flex-col bottom-0 left-0 w-full  items-center ${isVisible ? "" : "hidden"}`}>
      <div className="flex flex-col bg-black-500 text-white h-400 overflow-scroll z-50  w-11/12 rounded-t-lg ">
        {parsedNotification ?
          parsedNotification.map((notification) => {
            console.log(notification)
            // add name check if not use handle
            const notificationType = notification.notificationId.split("-")[0];
            const content = notification.comment
              ? notification.comment.metadata.content
              : notification.publication
              ? notification.publication.metadata.comment
              : null;
            let profilePicture = notification.profile
              ? notification.profile.picture?.orignal
                ? notification.profile.picture?.original.url
                : notification.profile.picture?.uri
              : notification.wallet.defaultProfile.picture?.original
              ? notification.wallet.defaultProfile.picture?.original.url
              : notification.wallet.defaultProfile.picture?.uri;
            if (profilePicture?.split("//")[0] == "ipfs:") {
              profilePicture = getIpfsGatedURL(profilePicture);
            }

            return (
              <NotificationBox
                notificationType={notificationType}
                profileName={
                  notification.profile
                    ? notification.profile.name
                    : notification.wallet.defaultProfile.name
                }
                profilePicture={profilePicture}
                content={content}
              />
            );
          }):<div>No new notifications found</div>}
      </div>
    </div>
  );
};

const NotificationBox = ({
  notificationType,
  profileName,
  profilePicture,
  content,
}) => {
  console.log(notificationType);
  switch (notificationType) {
    case "reaction":
      return (
        <div className="flex cursor-pointer px-6 border-b py-5 border-black-300 gap-3 hover:bg-black-600">
          <img src="#" className="w-16 h-16 rounded-full"></img>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img className="w-7 h-7 rounded-full" src={profilePicture}></img>
              <p>{profileName}</p>
            </div>
            <p>liked your post</p>
            <p>{content}</p>
          </div>
        </div>
      );
      break;
    case "commented":
      return (
        <div className="flex cursor-pointer px-6 border-b border-black-300 py-1 gap-3">
          <img src="#" className="w-16 h-16 rounded-full"></img>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img className="w-7 h-7 rounded-full" src={profilePicture}></img>
              <p>{profileName}</p>
            </div>
            <p>liked your post</p>
            <p>{content}</p>
          </div>
        </div>
      );
      break;
    case "mirrored":
      return (
        <div className="flex cursor-pointer px-6 border-b border-black-300 py-1 gap-3">
          <img src="#" className="w-16 h-16 rounded-full"></img>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img className="w-7 h-7 rounded-full" src={profilePicture}></img>
              <p>{profileName}</p>
            </div>
            <p>liked your post</p>
            <p>{content}</p>
          </div>
        </div>
      );
      break;
    case "followed":
      return (
        <div className="flex cursor-pointer px-6 border-b border-black-300 py-1 gap-3">
          <img src="#" className="w-16 h-16 rounded-full"></img>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img className="w-7 h-7 rounded-full" src={profilePicture}></img>
              <p>{profileName}</p>
            </div>
            <p>liked your post</p>
          </div>
        </div>
      );
      break;
  }
};
