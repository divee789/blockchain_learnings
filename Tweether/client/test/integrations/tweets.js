const TweetStorage = artifacts.require("TweetStorage");
const TweetController = artifacts.require("TweetController");
const UserController = artifacts.require("UserController");
const utils = require("../utils");

const { assertVMException } = utils;

contract("tweets", () => {
  before(async () => {
    const userCtrl = await UserController.deployed();

    const username = web3.utils.fromAscii("divine");
    const firstName = web3.utils.fromAscii("Divine");
    const lastName = web3.utils.fromAscii("Olokor");

    await userCtrl.createUser(
      username,
      firstName,
      lastName,
      "I like building stuff",
      "example@example.com"
    );
  });

  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed();

    try {
      const tx = await storage.createTweet(1, "Hello world");
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  });

  it("can create tweet with controller", async () => {
    const controller = await TweetController.deployed();

    const tx = await controller.createTweet(1, "Hello world!");

    assert.isOk(tx);
  });

  it("can get tweet", async () => {
    const storage = await TweetStorage.deployed();

    const tweet = await storage.tweets.call(1);
    const { id, text, userId } = tweet;

    assert.equal(parseInt(id), 1);
    assert.equal(text, "Hello world!");
    assert.equal(parseInt(userId), 1);
  });

  it("can get all tweets IDs from user", async () => {
    const storage = await TweetStorage.deployed();

    const userId = 1;
    const ids = await storage.getTweetIdsFromUser(userId).call();

    const expectedTweetId = 1;

    assert.isOk(Array.isArray(ids));
    assert.equal(ids[0], expectedTweetId);
  });
});
