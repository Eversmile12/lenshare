import type { PlasmoCSConfig } from "plasmo";

import { sendToBackground } from "@plasmohq/messaging";
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
        await sendToBackground({
          name: "openPopup",
          body: {
            relativeUrl: "tabs/window.html",
            tweetText: tweet.text,
            left: screen.availWidth - 400,
            isFocus: true,
          },
        });

      
      };
      tweet.appendChild(button);
    }
  });
};
