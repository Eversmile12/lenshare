import type { PlasmoMessaging } from "@plasmohq/messaging";

import { TwitterHandler } from "~twitter/twitterHandler";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { id } = req.body;

  const twitter = new TwitterHandler(process.env.PLASMO_PUBLIC_TWITTER_BEARER);

  const tweet = await twitter.getTweet(id);
  console.log(tweet);
  res.send({
    tweet: tweet,
  });
};

export default handler;
