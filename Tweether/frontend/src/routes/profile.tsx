import { useEffect, useState } from "react";
import TweetList from "../components/TweetList";

import {
  getUserIdFromUsername,
  getUserInfo,
  getTweetIdsFromUser,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from "../web3/provider";

const ProfilePage = (props: { userName: string }) => {
  const [profile, setProfile] = useState<any>({});
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const userId = await getUserIdFromUsername(props.userName);
      loadProfile(userId);
      loadTweets(userId);
    };

    getData();
  }, []);

  const loadProfile = async (userId: number) => {
    const data = await getUserInfo(userId);

    setProfile(data);
  };

  const loadTweets = async (userId: number) => {
    const tweetIds = await getTweetIdsFromUser(userId);
    // Fetch the tweet info for every tweet ID:
    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId);
    });

    const data = await loadTweetsFromTweetPromises(tweetPromises);

    setTweets(data);
  };

  const { username, firstName, lastName, bio, gravatarEmail } = profile;

  return (
    <section>
      {username && (
        <div>
          <div className="profile-top">
            <div className="info">
              <h1>
                {firstName} {lastName}
              </h1>
              <p className="username">@{username}</p>
              <p className="desc">{bio}</p>
              <p className="desc">{gravatarEmail}</p>
            </div>
          </div>
          <h2>
            {firstName}'s tweets ({tweets.length})
          </h2>
          <TweetList tweets={tweets} />
        </div>
      )}
    </section>
  );
};

export default ProfilePage;
