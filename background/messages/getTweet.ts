import { gql } from "@apollo/client"

import type { PlasmoMessaging } from "@plasmohq/messaging"

import { USER_PROFILES } from "~graphql/getDefaultProfile.query"
import { storage } from "~handlers/storageHandler"
import { TwitterHandler } from "~twitter/twitterHandler"

import { apolloClient } from "../../apolloclient"

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
