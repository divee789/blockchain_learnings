import { loadWeb3, getInstance } from "./provider";
import TweetStorage from "./artifacts/TweetStorage.json";
import TweetController from "./artifacts/TweetController.json";

loadWeb3();

export const createTweet = async (text) => {
  const controller = await getInstance(TweetController);

  try {
    const addresses = await window.web3.eth.getAccounts();

    // "createTweet" wants both the user ID and the text as params for now:
    const result = await controller.methods.createTweet(1, text).send({
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
