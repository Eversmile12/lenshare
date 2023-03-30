import { useStorage } from "@plasmohq/storage/hook";
import { useEffect, useState } from "react";
import { Storage } from "@plasmohq/storage";
import { AppStorage } from "~handlers/storageHandler";

export const ProfileImage = ({
  profileImage,
  className = "",
  callback = null,
}) => {
  const [notifications] = useStorage<any>({
    key: "notifications",
    instance: new Storage({
      area: "local",
    }),
  });
  const [isNotificationsSeen] = useStorage<any>("isNotificationsSeen");

  useEffect(() => {});
  return (
    <div
      className={`relative rounded-_2xl bg-gradient-to-r  from-pink-500 to bg-purple-500 w-92 h-92 items-center justify-center flex ${className}`}
    >
      <div className="h-88 w-88 rounded-_2xl  bg-white flex justify-center items-center ">
        <div className="relative">
          <img
            className="rounded-_2xl w-77 h-77"
            src={
              profileImage ? profileImage : "https://via.placeholder.com/500"
            }
          />
        </div>
      </div>
      {notifications && (
        <div
          onClick={() => {
            if (callback) {
              callback();
              AppStorage.store("isNotificationsSeen", true);
            }
          }}
          className={`${
            !isNotificationsSeen && "animate-pulse"
          } top-0 right-0 -mr-2 -mt-1 absolute w-6 h-6 flex justify-center items-center text-[10px] bg-gradient-to-r  from-pink-500 to bg-purple-500 border-2 border-white dark:border-gray-800 rounded-full cursor-pointer text-white hover:bg-gradient-to-r  hover:from-pink-400 to hover:bg-purple-400 `}
        ></div>
      )}
    </div>
  );
};
