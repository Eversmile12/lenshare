import { sendToBackground } from "@plasmohq/messaging";
import cog from "data-base64:~assets/cog.png";
import { useState } from "react";
import { AppStorage, storage } from "~handlers/storageHandler";

export const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = async () => {
    await AppStorage.store("accessToken", null);
    await AppStorage.store("refreshToken", null);
    await AppStorage.store("isLogin", false);
    await AppStorage.store("userId", null);
    await AppStorage.store("address", null);
    await AppStorage.store("isUseDispatcher", false, "local");
    // await storage.store({
    //   name: "storageSet",
    //   body: {
    //     id: "isDirectBridge",
    //     data: profile.dispatcher.canUseRelay,
    //   },
    // });

    await sendToBackground({ name: "reloadWindow" });
  };
  return (
    <div className="absolute top-2 right-2 cursor-pointer">
      <div
        className="relative inline-block text-left"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={cog} className="w-16 h-16"></img>
      </div>

      {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div
        className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        hidden={!showMenu}
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-0"
            onClick={() => chrome.runtime.openOptionsPage()}
          >
            Settings
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-1"
          >
            Docs
          </a>
          <form method="POST" action="#" role="none">
            <button
              onClick={logout}
              type="submit"
              className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
              role="menuitem"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
