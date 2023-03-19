import process from "process";
import { TwitterApi } from "../node-twitter-api-v2/src";

export class TwitterHandler {
  client: TwitterApi;

  constructor(bearer: string) {
    console.log("Bearer", bearer);
    this.client = new TwitterApi(bearer);
  }

  async setUpUserClient() {
    const appClient = await this.client.appLogin();
    this.client = appClient;
  }
  getTweet = async (id: string) => {
    const tweet = await this.client.v2
      .singleTweet(id, {
        "media.fields": ["url"],
      })
      .then((tweet) => tweet.data);
    return tweet;
  };
}
