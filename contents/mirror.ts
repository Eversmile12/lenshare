import type { PlasmoCSConfig } from "plasmo"

import { sendToBackgroundViaRelay } from "@plasmohq/messaging"

import { TwitterHandler } from "~twitter/twitterHandler"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"],
  all_frames: true,
  world: "MAIN"
}

window.addEventListener("load", () => {
  setInterval(() => {
    const tweets = document.querySelectorAll("article")
    attachButtonToTweets(tweets)
  }, 1000)
})

const getTweetText = async () => {
  console.log("calling background")
  const { url } = await sendToBackgroundViaRelay({
    name: "getCurrentTab"
  })

  const tweetURL = url.split("/")
  console.log(tweetURL)
  const tweetId = tweetURL[tweetURL.length - 1]
  console.log(tweetId)
  const { tweet } = await sendToBackgroundViaRelay({
    name: "getTweet",
    body: {
      id: tweetId
    }
  })
}
const attachButtonToTweets = (tweets: NodeListOf<HTMLElement>) => {
  tweets.forEach((tweet) => {
    if (!tweet.querySelector("#lens-mirror-wizard")) {
      const button = document.createElement("a")
      button.innerText = "Heyo"
      button.id = "lens-mirror-wizard"
      button.onclick = () => {
        getTweetText()
      }
      tweet.appendChild(button)
    }
  })
}
