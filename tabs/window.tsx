import { useEffect, useState } from "react";
import { useStorage } from "@plasmohq/storage/hook";
import { Metadata, PublicationMainFocus } from "~interfaces/publication";
import { sendToBackground } from "@plasmohq/messaging";
import fleekStorage from "@fleekhq/fleek-storage-js";
import { createPost } from "~handlers/postsHandler";
import { v4 as uuidv4 } from "uuid";
import "~base.css";
import "~style.css";

export default function IndexPopup() {
  return <PopupWindow />;
}

const PopupWindow = () => {
  const [popupText] = useStorage<string>("popupText");
  const [tweetText] = useStorage<string>("tweetText");
  const [modifiedTweetText, setModifiedTweetText] = useState("");

  const uploadTweetOnIpfs = async (tweet) => {
    console.log(tweet);
    const profileId = await sendToBackground({
      name: "storageGet",
      body: {
        id: "userId",
      },
    }).then((data) => data.response);

    const metadataId = uuidv4();
    console.log(typeof tweet.text);
    const metadata: Metadata = {
      /**
       * The metadata version.
       */
      version: "2.0.0",
      mainContentFocus: PublicationMainFocus.TEXT_ONLY,
      metadata_id: metadataId,
      appId: "lenshare",
      name: tweet.text,
      description: tweet.text,
      locale: "en-US",
      content: tweet.text,
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
      tags: ["lenshare frens", "Lenshared"],
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
    const { hash, profileId } = await uploadTweetOnIpfs(modifiedTweetText);
    console.log(hash, profileId);
    await createPost(hash, profileId);
  };

  useEffect(() => setModifiedTweetText(tweetText), [tweetText]);

  return (
    <div className="p-6">
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label className="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows={6}
            value={modifiedTweetText}
            onChange={(e) => {
              setModifiedTweetText(e.target.value);
            }}
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button
            onClick={() => post()}
            className="inline-flex bg-gray-700 items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Post comment
          </button>
          <div className="flex pl-0 space-x-1 sm:pl-2">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
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
                fill="currentColor"
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
                fill="currentColor"
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
        </div>
      </div>
    </div>
  );
};
