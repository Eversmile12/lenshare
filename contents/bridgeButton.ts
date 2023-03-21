import type { PlasmoCSConfig } from "plasmo";
import bridge from "data-base64:~assets/bridge-icon.svg";
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
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap"
  );
  document.head.appendChild(link);
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
      const buttonBar = tweet.querySelector("div [role*='group']");
      if (buttonBar) {
        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.height = "100%";
        buttonContainer.style.marginRight = "16px";
        buttonContainer.style.marginLeft = "4px";
        buttonContainer.style.alignItems = "center";
        buttonContainer.style.cursor = "pointer";

        const button = document.createElement("img");
        button.src = bridge;
        button.width = 26;
        button.height = 26;
        button.style.color = "white";
        button.id = "lens-mirror-wizard";
        button.style.cursor = "pointer";
        buttonContainer.onclick = async () => {
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

        const label = document.createElement("p");
        label.textContent = "Bridge";
        label.style.color = "#71767b";
        label.style.fontFamily = "Monospace";
        label.style.marginLeft = "6px";

        console.log(buttonBar);
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(label);
        buttonBar.appendChild(buttonContainer);
      }
    }
  });
};
