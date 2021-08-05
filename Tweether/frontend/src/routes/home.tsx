import { useState, useEffect } from "react";
import TweetList from "../components/TweetList";
import {
  addSmartContractListeners,
  getLatestTweetIds,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from "../web3/provider";

const HomePage = () => {
  const [tweets, setTweets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadLatestTweets();
    addSmartContractListeners(loadLatestTweets);
  }, []);

  const loadLatestTweets = async () => {
    setLoading(true);
    const tweetIds = await getLatestTweetIds();

    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId);
    });

    const data = await loadTweetsFromTweetPromises(tweetPromises);

    setLoading(false);

    setTweets(data);
  };

  return (
    <div className="tweets_body">
      <h2>Latest posts</h2>

      {loading && <p>Fetching posts</p>}
      {!loading && <TweetList tweets={tweets} />}
    </div>
  );
};

export default HomePage;
