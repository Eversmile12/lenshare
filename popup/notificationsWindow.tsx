import { useStorage } from "@plasmohq/storage/hook";
import { Storage } from "@plasmohq/storage";
import { useEffect, useState } from "react";
import comment from "data-base64:~assets/comment.png";
import like from "data-base64:~assets/like.png";
import collect from "data-base64:~assets/collect.png";
import mirror from "data-base64:~assets/mirror.png";
import follow from "data-base64:~assets/follow.png";

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

  return (
    <div
      className={`absolute flex flex-col bottom-0 left-0 w-full  items-center ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col bg-black-500 text-white h-400 overflow-scroll z-50  w-11/12 rounded-t-lg ">
        {parsedNotification ? (
          parsedNotification.map((notification) => {
            return <NotificationBox notification={notification} />;
          })
        ) : (
          <div>No new notifications found</div>
        )}
      </div>
    </div>
  );
};

const NotificationBox = ({ notification }) => {
  console.log(notification);

  const getIpfsGatedURL = (ipfsURL: string): string => {
    const ipfsId = ipfsURL.split("//")[1];
    return `https://ipfs.filebase.io/ipfs/${ipfsId}`;
  };
  const getImageProfilePicture = (notification) => {
    let imageProfilePicture = notification.profile.picture
      ? notification.profile.picture.original
        ? notification.profile.picture.original.url
        : notification.profile.picture.uri
      : `https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=${notification.profile.handle}`;
    if (imageProfilePicture?.split("//")[0] == "ipfs:") {
      imageProfilePicture = getIpfsGatedURL(imageProfilePicture);
    }
    return imageProfilePicture;
  };

  const getNftProfilePicture = () => {};
  switch (notification.notificationId.split("-")[0]) {
    case "reaction":
      return (
        <div className="flex cursor-pointer px-6 border-b py-5 border-black-300 gap-3 hover:bg-black-600">
          <div className="w-16 h-16 mt-1">
            {" "}
            <img src={like} className="w-16 h-16 rounded-full"></img>
          </div>
          <div className="flex flex-col gap-2 w-4/5 text-justify">
            <div className="flex items-center gap-2 ">
              <img
                className="w-7 h-7 rounded-full"
                src={getImageProfilePicture(notification)}
              ></img>

              <p>
                <strong>
                  {notification.profile.name
                    ? notification.profile.name
                    : notification.profile.handle}
                </strong>
              </p>
            </div>
            <a
              target={"_blank"}
              href={`https://lenster.xyz/posts/${notification.publication.id}`}
            >
              <p>
                <strong>Liked your post</strong>
              </p>
              <p>{notification.publication.metadata.content}</p>
            </a>
          </div>
        </div>
      );
      break;
    case "commented":
      return (
        <div className="flex cursor-pointer px-6 border-b py-5 border-black-300 gap-3 hover:bg-black-600">
          <div className="w-16 h-16 mt-1">
            {" "}
            <img src={comment} className="w-16 h-16 rounded-full"></img>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img
                className="w-7 h-7 rounded-full"
                src={getImageProfilePicture(notification)}
              ></img>
              <a
                target={"_blank"}
                href={`https://lenster.xyz/posts/${notification.comment.commentOn.id}`}
              >
                <p>
                  <strong>
                    {notification.profile.name
                      ? notification.profile.name
                      : notification.profile.handle}
                  </strong>
                </p>
              </a>
            </div>
            <p>Commented on your post</p>
            <p>{notification.comment.metadata.description}</p>
          </div>
        </div>
      );
      break;
    case "mirrored":
      return (
        <div className="flex cursor-pointer px-6 border-b py-5 border-black-300 gap-3 hover:bg-black-600">
          <div className="w-16 h-16 mt-1">
            {" "}
            <img src={mirror} className="w-16 h-16 rounded-full"></img>
          </div>{" "}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img
                className="w-7 h-7 rounded-full"
                src={getImageProfilePicture(notification)}
              ></img>
              <p>
                <strong>
                  {" "}
                  {notification.profile.name
                    ? notification.profile.name
                    : notification.profile.handle}
                </strong>
              </p>
            </div>
            <a
              target={"_blank"}
              href={`https://lenster.xyz/posts/${notification.publication.id}`}
            >
              <p>Mirrored your post</p>
              <p>{notification.publication.metadata.content}</p>
            </a>
          </div>
        </div>
      );
      break;
    case "followed":
      let nftProfilePicture = notification.wallet.defaultProfile.picture
        ? notification.wallet.defaultProfile.picture.original
          ? notification.wallet.defaultProfile.picture.original.url
          : notification.wallet.defaultProfile.picture.uri
        : "";
      if (nftProfilePicture?.split("//")[0] == "ipfs:") {
        nftProfilePicture = getIpfsGatedURL(nftProfilePicture);
      }
      return (
        <div className="flex cursor-pointer px-6 border-b py-5 border-black-300 gap-3 hover:bg-black-600">
          <div className="w-16 h-16 mt-1">
            {" "}
            <img src={follow} className="w-16 h-16 rounded-full"></img>
          </div>{" "}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img
                className="w-7 h-7 rounded-full"
                src={nftProfilePicture}
              ></img>
              <p>
                <strong>
                  {notification.wallet.defaultProfile.name
                    ? notification.wallet.defaultProfile.name
                    : notification.wallet.defaultProfile.handle}
                </strong>
              </p>
            </div>
            <p>Followed you</p>
          </div>
        </div>
      );
      break;
  }
};
