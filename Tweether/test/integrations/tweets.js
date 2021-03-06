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

    const tx = await controller.createTweet("Hello world!");
    const { logs } = tx;

    assert.isOk(tx);
    assert.ok(Array.isArray(logs));
    assert.equal(logs.length, 1);

    const log = logs[0];
    assert.equal(log.event, "NewTweet");
    // assert.equal(log.args.userId.toString(), "1");
    // assert.equal(log.args.tweetId.toString(), "1");
  });

  it("can get tweet", async () => {
    const storage = await TweetStorage.deployed();

    const tweet = await storage.tweets.call(1);
    const { id, text, userId } = tweet;

    assert.equal(parseInt(id), 1);
    assert.equal(text, "Hello world!");
    assert.equal(parseInt(userId), 1);
  });

  it("can get tweet ID based on index", async () => {
    const storage = await TweetStorage.deployed();

    const tweetId = await storage.tweetIds.call(0);

    assert.equal(tweetId, 1);
  });

  it("can get all tweets IDs from user", async () => {
    const storage = await TweetStorage.deployed();

    const userId = 1;
    const ids = await storage.getTweetIdsFromUser.call(userId);

    const expectedTweetId = 1;

    assert.isOk(Array.isArray(ids));
    assert.equal(ids[0], expectedTweetId);
  });
});
