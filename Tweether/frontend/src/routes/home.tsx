import { useState, useEffect } from "react";

import TweetList from "../components/TweetList";
import {
  getLatestTweetIds,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from "../web3/provider";

const HomePage = () => {
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    loadLatestTweets();
  }, []);

  const loadLatestTweets = async () => {
    const tweetIds = await getLatestTweetIds();

    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId);
    });

    const data = await loadTweetsFromTweetPromises(tweetPromises);

    setTweets(data);
  };

  return (
    <div>
      <h2>Latest tweets</h2>

      <TweetList tweets={tweets} />
    </div>
  );
};

export default HomePage;
