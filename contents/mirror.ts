import type { PlasmoCSConfig } from "plasmo";
import { v4 as uuidv4 } from "uuid";
import { Metadata, PublicationMainFocus } from "~interfaces/publication";
import fleekStorage from "@fleekhq/fleek-storage-js";

import { sendToBackground } from "@plasmohq/messaging";
import { createPost } from "~handlers/postsHandler";
import { storage } from "~handlers/storageHandler";

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"],
  all_frames: true,
};

window.addEventListener("load", async () => {
  const isLogin = await storage
    .retrieve("isLogin")
    .then((response) => response);

  if (!isLogin) return;

  setInterval(() => {
    const tweets = document.querySelectorAll("article");
    attachButtonToTweets(tweets);
  }, 1000);
});

const getTweet = async () => {
  const { url } = await sendToBackground({
    name: "getCurrentTab",
  });
  const tweetURL = url.split("/");
  const tweetId = tweetURL[tweetURL.length - 1];

  const { tweet } = await sendToBackground({
    name: "getTweet",
    body: {
      id: tweetId,
    },
  });
  return tweet;
};

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
    apiKey: "wU5aoihwMLRu3qwCpmJdLQ==",
    apiSecret: "q0Gn26Vq0bjD1MLP4G+4irvWlFlm7fK7xU5kRP/M8GE=",
    key: profileId.concat("-", metadataId),
    data: JSON.stringify(metadata),
    httpUploadProgressCallback: (event) => {
      console.log(Math.round((event.loaded / event.total) * 100) + "% done");
    },
  });
  return { hash: file.hash, profileId };
};

const attachButtonToTweets = (tweets: NodeListOf<HTMLElement>) => {
  tweets.forEach((tweet) => {
    if (!tweet.querySelector("#lens-mirror-wizard")) {
      const button = document.createElement("a");
      button.innerText = "Heyo";
      button.id = "lens-mirror-wizard";
      button.onclick = async () => {
        const tweet = await getTweet();

        await sendToBackground({
          name: "flushUnnecessaryStorage",
        });
        await storage.store("isPopup", true);
        await sendToBackground({
          name: "openPopup",
          body: {
            relativeUrl: "tabs/test.html",
            left: screen.availWidth - 400,
            isFocus: true,
          },
        });
        await storage.store("isPopup", false);


        // const { hash, profileId } = await uploadTweetOnIpfs(tweet);

        // await createPost(hash, profileId);
      };
      tweet.appendChild(button);
    }
  });
};
