
import type { PlasmoMessaging } from "@plasmohq/messaging"

import { TwitterHandler } from "~twitter/twitterHandler"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { id } = req.body
  const twitter = new TwitterHandler()

  const tweet =await twitter.getTweet(id)
  console.log(tweet)
  res.send({
    tweet: tweet
  })
}

export default handler
