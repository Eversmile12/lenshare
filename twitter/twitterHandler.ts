import process from "process";
import { TwitterApi } from "../node-twitter-api-v2/src";

export class TwitterHandler {
  private appKey: string = process.env.TWITTER_APP_KEY;
  private appSecret: string = process.env.TWITTER_APP_SECRET;
  client: TwitterApi;
  constructor() {
    this.client = new TwitterApi(
      "AAAAAAAAAAAAAAAAAAAAAJrKmAEAAAAABm4Dk9wwTh89vuVZGgx0uVgUgfY%3DNVlkweVXLw0vPBo4w4W93vBSyf5gDVgh9jo6mWK0PfYxv6hRXg"
    );
  }

  async setUpUserClient() {
    const appClient = await this.client.appLogin();
    this.client = appClient;
  }
  getTweet = async (id: string) => {
    const tweet = await this.client.v2.singleTweet(id, {
      "media.fields": ["url"],
    }).then(tweet => tweet.data);
    return tweet
  };
}
