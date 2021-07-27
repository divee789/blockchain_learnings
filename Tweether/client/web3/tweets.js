import { loadWeb3, getInstance } from "./provider";
import TweetStorage from "./artifacts/TweetStorage.json";
import TweetController from "./artifacts/TweetController.json";

import { getUserInfo } from "./users";

loadWeb3();

export const createTweet = async (text) => {
  const controller = await getInstance(TweetController);

  try {
    const addresses = await window.web3.eth.getAccounts();

    // "createTweet" wants both the user ID and the text as params for now:
    const result = await controller.methods.createTweet(text).send({
      from: addresses[0],
    });

    return result;
  } catch (err) {
    console.error("Err:", err);
  }
};

export const getTweetInfo = async (tweetId) => {
  const storage = await getInstance(TweetStorage);
  const tweet = await storage.methods.tweets(tweetId).call();

  const { id, text, userId, postedAt } = tweet;

  // Parse the data to make it look nice:
  return {
    id: parseInt(id),
    userId: parseInt(userId),
    text,
    postedAt: parseInt(postedAt),
  };
};

export const getTweetIdsFromUser = async (userId) => {
  const storage = await getInstance(TweetStorage);
  const tweetIds = await storage.methods.getTweetIdsFromUser(userId).call();

  return tweetIds.map((tweetId) => parseInt(tweetId));
};

export const loadTweetsFromTweetPromises = async (tweetPromises) => {
  const tweets = await Promise.all(tweetPromises);

  const userPromises = tweets.map((tweet) => {
    const { userId } = tweet;
    return getUserInfo(userId);
  });

  const users = await Promise.all(userPromises);

  return tweets.map((tweet, index) => {
    return {
      user: users[index],
      ...tweet,
    };
  });
};

export const getLatestTweetIds = async (amount = 5, page = 1) => {
  const storage = await getInstance(TweetStorage);

  const numTweets = await storage.methods.getNumTweets().call();

  const tweetIdPromises = [];

  const lastIndex = numTweets - 1; // Latest
  const pageIndex = page - 1;
  const startIndex = lastIndex - amount * pageIndex;
  const maxIndex = startIndex - amount;

  for (let i = startIndex; i > maxIndex; i--) {
    if (i < 0) break;

    tweetIdPromises.push(storage.methods.tweetIds(i).call());
  }

  const tweetIds = await Promise.all(tweetIdPromises);

  return tweetIds;
};
