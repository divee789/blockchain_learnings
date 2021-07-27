import React, { useState, useEffect } from "react";

import { Page, Center } from "../components/Layout";
import {
  getLatestTweetIds,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from "../web3/tweets";

import TweetList from "../components/TweetList";

const HomePage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    loadLatestTweets();
  }, []);

  const loadLatestTweets = async () => {
    const tweetIds = await getLatestTweetIds();

    "Loading latest tweets", tweetIds;

    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId);
    });

    const data = await loadTweetsFromTweetPromises(tweetPromises);

    setTweets(data);
  };

  return (
    <Page>
      <Center>
        <h2>Latest tweets</h2>

        <TweetList tweets={tweets} />
      </Center>

      <style jsx>{`
        h2 {
          font-size: 16px;
          color: rgba(84, 83, 98, 0.64);
          letter-spacing: 0.5px;
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 16px;
          margin-top: 4px;
        }
      `}</style>
    </Page>
  );
};

export default HomePage;
