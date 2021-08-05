/* eslint-disable no-control-regex */
import { createAlchemyWeb3, AlchemyWeb3 } from "@alch/alchemy-web3";
import TweetStorage from "./artifacts/TweetStorage.json";
import TweetController from "./artifacts/TweetController.json";
import UserStorage from "./artifacts/UserStorage.json";
import UserController from "./artifacts/UserController.json";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

const UserStorageAddress = "0xd4c41cb7CC49948e7179758ebC7A50212EeB55d0";
const UserControllerAddress = "0xDC2FfcE136d0D029d4aE81072dC9481c4e48aE1c";
const TweetControllerAddress = "0x10bA88028cc2761929080650e348651AAef8124F";
const TweetStorageAddress = "0xef26af8307c83a21Bb09f54028f8e4fD1Bc981A8";

let web3: AlchemyWeb3;

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressesArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (addressesArray.length === 0) {
        throw new Error("No wallet addresses found");
      }

      return addressesArray[0];
    } catch (err) {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        throw new Error("User rejected connection request");
      }
      throw new Error(err.message);
    }
  } else {
    throw new Error("Ethereum wallet not found");
  }
};

export const addWalletListener = (
  callback: (account: any) => void,
  error: () => void
) => {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts: any[]) => {
      console.log("Account changed", accounts);
      if (accounts.length > 0) {
        callback(accounts[0]);
      } else {
        callback(null);
      }
    });
  } else {
    error();
  }
};

export const addSmartContractListeners = (callback: () => void) => {
  // const tweetStorage = getAlchemyInstance(
  //   TweetStorage.abi,
  //   TweetStorageAddress
  // );
  // tweetStorage.events.NewTweet({}, (error: any, data: any) => {
  //   if (error) {
  //     console.log("TWEETS EVENT ERROR", error);
  //   } else {
  //     console.log("TWEETS EVENT DATA", data);
  //     callback();
  //   }
  // });
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return addressArray[0];
      } else {
        return null;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  } else {
    throw new Error("Ethereum wallet not found");
  }
};

export const loadAlchemyWeb3 = async () => {
  const API_URL = process.env.REACT_APP_ALCHEMY_KEY as string;
  web3 = createAlchemyWeb3(API_URL);
};

export const getAlchemyInstance = (
  contractABI: any,
  contractAddress: string
) => {
  return new web3.eth.Contract(contractABI, contractAddress);
};

export const validateRequest = (address?: string) => {
  if (!window.ethereum || !address) {
    throw new Error("No wallet not found");
  }
};

export const sendTransaction = async (
  contractAddress: string,
  walletAddress: string,
  method: any
): Promise<string> => {
  const parameters = {
    to: contractAddress, // Required except during contract publications.
    from: walletAddress, // must match user's active address.
    data: method.encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [parameters],
    });

    return txHash;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getLoggedInUserId = async (address: string) => {
  try {
    const userStorage = getAlchemyInstance(UserStorage.abi, UserStorageAddress);
    const userId = await userStorage.methods.addresses(address).call();

    return parseInt(userId);
  } catch (err) {
    console.error("Err:", err);
  }
};

export const getUserIdFromUsername = async (username: string) => {
  const userStorage = getAlchemyInstance(UserStorage.abi, UserStorageAddress);
  const userId = await userStorage.methods
    .usernames(web3.utils.fromAscii(username))
    .call();

  return userId;
};

export const getUserInfo = async (userId: number) => {
  const userStorage = getAlchemyInstance(UserStorage.abi, UserStorageAddress);
  const profile = await userStorage.methods.profiles(userId).call();
  const { id, username, firstName, lastName, bio, gravatarEmail } = profile;

  if (!parseInt(id)) throw new Error("Couldn't find user!");

  return {
    id: parseInt(id),
    username: web3.utils.toAscii(username).replace(/\u0000/g, ""),
    firstName: web3.utils.toAscii(firstName).replace(/\u0000/g, ""),
    lastName: web3.utils.toAscii(lastName).replace(/\u0000/g, ""),
    bio,
    gravatarEmail,
  };
};

export const createUser = async (
  walletAddress: string,
  userName: string,
  firstName: string,
  lastName: string,
  Bio: string,
  Email: string
): Promise<string> => {
  const userController = getAlchemyInstance(
    UserController.abi,
    UserControllerAddress
  );

  const result = await sendTransaction(
    UserControllerAddress,
    walletAddress,
    userController.methods.createUser(
      web3.utils.fromAscii(userName),
      web3.utils.fromAscii(firstName),
      web3.utils.fromAscii(lastName),
      Bio,
      Email
    )
  );

  return result;
};

export const getTweetInfo = async (tweetId: number) => {
  const tweetStorage = getAlchemyInstance(
    TweetStorage.abi,
    TweetStorageAddress
  );

  const tweet = await tweetStorage.methods.tweets(tweetId).call();

  const { id, userId, text, postedAt } = tweet;

  return {
    id: parseInt(id),
    userId: parseInt(userId),
    text,
    postedAt: parseInt(postedAt),
  };
};

export const getTweetIdsFromUser = async (
  userId: number
): Promise<number[]> => {
  const tweetStorage = getAlchemyInstance(
    TweetStorage.abi,
    TweetStorageAddress
  );

  const tweetIds = await tweetStorage.methods
    .getTweetIdsFromUser(userId)
    .call();

  return tweetIds.map((tweetId: string) => parseInt(tweetId));
};

export const loadTweetsFromTweetPromises = async (tweetPromises: any[]) => {
  const tweets = await Promise.all(tweetPromises);

  const userPromises = tweets.map((tweet: any) => {
    const { userId } = tweet;
    return getUserInfo(userId);
  });

  const users = await Promise.all(userPromises);

  return tweets.map((tweet: any, index) => {
    return {
      user: users[index],
      ...tweet,
    };
  });
};

export const getLatestTweetIds = async (amount = 5, page = 1) => {
  const tweetStorage = getAlchemyInstance(
    TweetStorage.abi,
    TweetStorageAddress
  );

  const numTweets = await tweetStorage.methods.getNumTweets().call();
  const tweetIdPromises = [];

  const lastIndex = numTweets - 1; // Latest
  const pageIndex = page - 1;
  const startIndex = lastIndex - amount * pageIndex;
  const maxIndex = startIndex - amount;

  for (let i = startIndex; i > maxIndex; i--) {
    if (i < 0) break;

    tweetIdPromises.push(tweetStorage.methods.tweetIds(i).call());
  }

  const tweetIds = await Promise.all(tweetIdPromises);

  return tweetIds;
};

export const createTweet = async (text: string, address: string) => {
  const tweetController = getAlchemyInstance(
    TweetController.abi,
    TweetControllerAddress
  );

  const result = await sendTransaction(
    TweetControllerAddress,
    address,
    tweetController.methods.createTweet(text)
  );

  return result;
};
