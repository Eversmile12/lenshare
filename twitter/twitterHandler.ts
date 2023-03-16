import process from "process"
import { TwitterApi } from "twitter-api-v2"

export class TwitterHandler {
  private appKey: string = process.env.TWITTER_APP_KEY
  private appSecret: string = process.env.TWITTER_APP_SECRET
  client: TwitterApi
  constructor() {
    this.client = new TwitterApi(
      process.env.bearer
    )
  }

  async setUpUserClient() {
    const appClient = await this.client.appLogin()
    this.client = appClient
  }

  getTweet = async (id: string) => {
    const tweet = await this.client.v2.singleTweet(id)
    console.log(tweet)
  }
}
