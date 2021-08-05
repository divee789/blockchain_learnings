const UserStorage = artifacts.require("UserStorage");
const UserController = artifacts.require("UserController");
const utils = require("../utils");

const { assertVMException } = utils;

contract("Users", () => {
  it("can't create user without controller", async () => {
    const storage = await UserStorage.deployed();

    try {
      const username = web3.utils.fromAscii("divine");
      const tx = await controller.createUser(
        username,
        "Divine",
        "Olokor",
        "I like building stuff",
        "example@example.com"
      );
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  });

  it("can create user with controller", async () => {
    const controller = await UserController.deployed();

    const username = web3.utils.fromAscii("divine");
    const firstName = web3.utils.fromAscii("Divine");
    const lastName = web3.utils.fromAscii("Olokor");
    const tx = await controller.createUser(
      username,
      firstName,
      lastName,
      "I like building stuff",
      "example@example.com"
    );

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
