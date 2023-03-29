import { useEffect, useState } from "react";
import { useStorage } from "@plasmohq/storage/hook";
import { Metadata, PublicationMainFocus } from "~interfaces/publication";
import { sendToBackground } from "@plasmohq/messaging";
import fleekStorage from "@fleekhq/fleek-storage-js";
import { createPost } from "~handlers/postsHandler";
import { v4 as uuidv4 } from "uuid";
import "~base.css";
import "~style.css";
import { MainButton } from "../components/button";

export default function IndexPopup() {
  return <PopupWindow />;
}

const PopupWindow = () => {
  const [popupText] = useStorage<string>("popupText");
  const [tweetText] = useStorage<string>("tweetText");
  const [modifiedTweetText, setModifiedTweetText] = useState("");

  const uploadTweetOnIpfs = async () => {
    const profileId = await sendToBackground({
      name: "storageGet",
      body: {
        id: "userId",
      },
    }).then((data) => data.response);

    const metadataId = uuidv4();

    const metadata: Metadata = {
      /**
       * The metadata version.
       */
      version: "2.0.0",
      mainContentFocus: PublicationMainFocus.TEXT_ONLY,
      metadata_id: metadataId,
      appId: "Lens Bridge",
      name: modifiedTweetText,
      description: modifiedTweetText,
      locale: "en-US",
      content: modifiedTweetText,
      external_url: null,
      /**
       * legacy to support OpenSea will store any NFT image here.
       */
      image: null,
      imageMimeType: null,
      animation_url: null,
      /**
     * These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the 
    item.
     */
      media: [],
      attributes: [],
      tags: ["Lens Bridge", "bridged", "Bridge frens"],
    };

    const file = await fleekStorage.upload({
      apiKey: `${process.env.PLASMO_PUBLIC_FLEEK_API_KEY}`,
      apiSecret: `${process.env.PLASMO_PUBLIC_FLEEK_API_SECRET}`,
      key: profileId.concat("-", metadataId),
      data: JSON.stringify(metadata),
      httpUploadProgressCallback: (event) => {
        console.log(Math.round((event.loaded / event.total) * 100) + "% done");
      },
    });
    return { hash: file.hash, profileId };
  };
  const post = async () => {
    console.log("yo");
    const { hash, profileId } = await uploadTweetOnIpfs();
    console.log(hash, profileId);
    await createPost(hash, profileId);
  };

  useEffect(() => setModifiedTweetText(tweetText), [tweetText]);

  return (
    <div className="p-6 flex flex-col h-screen">
      <main className="flex-grow">
        <div className="w-full mb-4 border border-gray-600 rounded-lg bg-black-300 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-black-500 rounded-t-lg dark:bg-gray-800">
            <textarea
              id="comment"
              rows={9}
              value={modifiedTweetText}
              onChange={(e) => {
                setModifiedTweetText(e.target.value);
              }}
              className="w-full focus:outline-none px-0 text-sm text-white bg-black-500 border-0 dark:bg-black-primary focus:ring-0 dark:text-white dark:placeholder-gray-400"
              required
            ></textarea>
            <div className="flex text-white gap-3 ">
              <select className="bg-black-300 py-1 px-4 rounded-lg cursor-pointer">
                <option>No content warning</option>
              </select>
              <div className="bg-black-300 py-1 px-4 rounded-lg cursor-pointer">
                <p>Add tag</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex pl-0 space-x-1 sm:pl-2">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Set location</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Upload image</span>
              </button>
            </div>
            <MainButton text={"Post"} callback={null} />
          </div>
        </div>
        <p className="text-center">
          Modify and set the settings of your post before bridging it. Learn
          more about bridging on the docs
        </p>
      </main>

      <footer className="flex flex-col items-center gap-1 mt-8 opacity-80 w-full">
        <a>
          <strong>leave a star on Github</strong>
        </a>
        <a>
          created with 🧡 by the
          <strong>community</strong>
        </a>
      </footer>
    </div>
  );
};
