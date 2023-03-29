import type { PlasmoCSConfig } from "plasmo";
import icon from "data-base64:~assets/icon.png";
import { sendToBackground } from "@plasmohq/messaging";
import { AppStorage } from "~handlers/storageHandler";

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"],
  all_frames: true,
};

window.addEventListener("load", async () => {
  const isLogin = await AppStorage.retrieve("isLogin").then(
    (response) => response
  );
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
      const buttonBarList = tweet.querySelectorAll("div [role*='group']");
      let buttonBar;
      if (buttonBarList.length > 1) {
        buttonBar = buttonBarList[1];
      } else {
        buttonBar = buttonBarList[0];
      }
      if (buttonBar) {
        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.height = "100%";
        buttonContainer.style.marginRight = "16px";
        buttonContainer.style.marginLeft = "6px";
        buttonContainer.style.alignItems = "center";
        buttonContainer.style.cursor = "pointer";
        const button = document.createElement("div");
        button.style.backgroundColor = "#1F2937";
        button.style.padding = "0px 8px";
        button.style.borderRadius = "12px";

        const buttonIcon = document.createElement("img");
        buttonIcon.src = icon;
        buttonIcon.width = 26;
        buttonIcon.height = 26;
        buttonIcon.style.color = "white";
        buttonIcon.id = "lens-mirror-wizard";
        buttonIcon.style.cursor = "pointer";
        button.onclick = async () => {
          const tweet = await getTweet();

          await sendToBackground({
            name: "flushUnnecessaryStorage",
          });

          await sendToBackground({
            name: "openPopup",
            body: {
              relativeUrl: "tabs/editor.html",
              tweetText: tweet.text,
              left: screen.availWidth - 400,
              isFocus: true,
            },
          });
        };
        button.appendChild(buttonIcon);
        buttonContainer.appendChild(button);

        buttonBar.appendChild(buttonContainer);
      }
    }
  });
};
