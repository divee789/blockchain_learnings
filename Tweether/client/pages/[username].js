import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Page, Center } from "../components/Layout";
import Avatar from "../components/Avatar";
import TweetList from "../components/TweetList";

import { getUserIdFromUsername, getUserInfo } from "../web3/users";
import {
  getTweetIdsFromUser,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from "../web3/tweets";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [tweets, setTweets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      router;
      const userId = await getUserIdFromUsername(router.query.username);
      loadProfile(userId);
      loadTweets(userId);
    };

    getData();
  }, []);

  const loadProfile = async (userId) => {
    const data = await getUserInfo(userId);

    setProfile(data);
  };

  const loadTweets = async (userId) => {
    const tweetIds = await getTweetIdsFromUser(userId);
    "tweetIds", tweetIds;
    // Fetch the tweet info for every tweet ID:
    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId);
    });

    const data = await loadTweetsFromTweetPromises(tweetPromises);

    setTweets(data);
  };

  const { username, firstName, lastName, bio, gravatarEmail } = profile;

  return (
    <>
      <Page>
        <Center
          style={{
            maxWidth: 560,
          }}
        >
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
                <Avatar />
              </div>
              <h2>
                {firstName}'s tweets ({tweets.length})
              </h2>
              <TweetList tweets={tweets} />
            </div>
          )}
        </Center>

        <style jsx>{`
          .profile-top {
            margin: 40px 0;
          }
          .info {
            display: inline-block;
            vertical-align: top;
          }
          h1 {
            font-size: 30px;
            font-weight: 500;
          }
          .username {
            font-size: 17px;
            font-weight: 400;
            margin: 7px 0;
          }
          .desc {
            font-size: 19px;
            font-weight: 400;
            margin-top: 22px;
          }

          h2 {
            font-size: 18px;
            font-weight: 600;
            margin-top: 70px;
          }
        `}</style>
      </Page>
    </>
  );
};

export default ProfilePage;
