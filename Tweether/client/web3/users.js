import { getInstance, loadWeb3 } from "./provider";
import UserStorage from "./artifacts/UserStorage.json";
import UserController from "./artifacts/UserController.json";

loadWeb3();

export const getUserIdFromUsername = async (username) => {
  const storage = await getInstance(UserStorage);
  username;
  const userId = await storage.methods
    .usernames(window.web3.utils.fromAscii(username))
    .call();

  return userId;
};

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const profile = await storage.methods.profiles(userId).call();
  const { id, username, firstName, lastName, bio, gravatarEmail } = profile;

  if (!parseInt(id)) throw "Couldn't find user!";

  return {
    id: parseInt(id),
    username: window.web3.utils.toAscii(username).replace(/\u0000/g, ""),
    firstName: window.web3.utils.toAscii(firstName).replace(/\u0000/g, ""),
    lastName: window.web3.utils.toAscii(lastName).replace(/\u0000/g, ""),
    bio,
    gravatarEmail,
  };
};

export const getLoggedInUserId = async () => {
  try {
    const addresses = await window.web3.eth.getAccounts();

    if (!addresses) return;

    const storage = await getInstance(UserStorage);
    storage;
    const userId = await storage.methods.addresses(addresses[0]).call();

    return parseInt(userId);
  } catch (err) {
    console.error("Err:", err);
  }
};

export const createUser = async (userName, firstName, lastName, Bio, Email) => {
  const controller = await getInstance(UserController);

  try {
    const addresses = await window.web3.eth.getAccounts();
    const result = await controller.methods
      .createUser(
        window.web3.utils.fromAscii(userName),
        window.web3.utils.fromAscii(firstName),
        window.web3.utils.fromAscii(lastName),
        Bio,
        Email
      )
      .send({ from: addresses[0] });

    return result;
  } catch (err) {
    console.error("Err:", err);
  }
};
