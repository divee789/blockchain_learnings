import React, { useEffect } from "react";
import { getUserInfo, createUser } from "../web3/users";
import { getTweetInfo, createTweet } from "../web3/tweets";

const HomePage = () => {
  const logUser = async () => {
    const userInfo = await getUserInfo(1);
    console.log(userInfo);
  };

  const createNewUser = async () => {
    const tx = await createUser("divine");
    console.log(tx);
  };

  const logTweet = async () => {
    const tweetInfo = await getTweetInfo(1);
    console.log(tweetInfo);
  };

  const createNewTweet = async () => {
    const tx = await createTweet("Hello world!");
    console.log(tx);
  };

  return (
    <>
      <h1>Hello </h1>
      <div>
        <button onClick={() => logUser()}>Get user with ID 1</button>
        <button onClick={() => createNewUser()}>Create user</button>
        <button onClick={() => logTweet()}>Get tweet with ID 1</button>
        <button onClick={() => createNewTweet()}>Create tweet</button>
      </div>
    </>
  );
};

export default HomePage;
