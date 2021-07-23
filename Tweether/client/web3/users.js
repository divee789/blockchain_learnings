import { getInstance, loadWeb3 } from "./provider";
import UserStorage from "./artifacts/UserStorage.json";
import UserController from "./artifacts/UserController.json";

loadWeb3();

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const { id, username } = await storage.methods.profiles(userId).call();
  return {
    id: parseInt(id),
    username: window.web3.utils.toAscii(username).replace(/\u0000/g, ""),
  };
};

export const createUser = async (username) => {
  const controller = await getInstance(UserController);

  try {
    const addresses = await window.web3.eth.getAccounts();
    const result = await controller.methods
      .createUser(window.web3.utils.fromAscii(username))
      .send({ from: addresses[0] });

    return result;
  } catch (err) {
    console.error("Err:", err);
  }
};
