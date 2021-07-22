const TweetStorage = artifacts.require("TweetStorage");
const utils = require("../utils");

const { assertVMException } = utils;

contract("tweets", () => {
  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed();

    try {
      const tx = await storage.createTweet(1, "Hello world");
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  });

  it("can get tweet", async () => {
    const storage = await TweetStorage.deployed();

    const tweet = await storage.tweets.call(1); // Get the data
    const { id, text, userId } = tweet; // Destructure the data

    // Check if the different parts contain the expected values:
    assert.equal(parseInt(id), 1);
    assert.equal(text, "Hello world!");
    assert.equal(parseInt(userId), 1);
  });
});
