const UserStorage = artifacts.require("UserStorage");
const utils = require("../utils");

const { assertVMException } = utils;

contract("Users", () => {
  it("can't create user without controller", async () => {
    const storage = await UserStorage.deployed();

    try {
      const username = web3.utils.fromAscii("tristan");
      await storage.createUser(username);
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  });

  it("can create user", async () => {
    const storage = await UserStorage.deployed();

    const username = web3.utils.asciiToHex("divine"); // "divine" is a username
    const tx = await storage.createUser(username);
    assert.isOk(tx);
  });

  it("can get user", async () => {
    const storage = await UserStorage.deployed();
    const userId = 1;

    // Get the userInfo array
    // .call only works if the variable is public;
    const userInfo = await storage.profiles.call(userId);

    // Convert the returned byte32 to string
    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, "");

    assert.equal(username, "divine");
  });
});
