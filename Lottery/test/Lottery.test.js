const { assert } = require("chai");

const Lottery = artifacts.require("./Lottery.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Lottery", (accounts) => {
  let lottery;

  before(async () => {
    lottery = await Lottery.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await lottery.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await lottery.name();
      assert.equal(name, "Blockchain Lottery");
    });
  });

  describe("Lottery", async () => {
    let result;

    before(async () => {
      await lottery.Manager(accounts[0]);
    });

    it("assigns Manager", async () => {
      assert.equal(await lottery.manager(), accounts[0]);
    });

    it("allows one player to enter", async () => {
      await lottery.enter({
        from: accounts[1],
        value: web3.utils.toWei("0.02", "ether"),
      });

      const players = await lottery.getPlayers();

      assert.equal(accounts[1], players[0]);
      assert.equal(1, players.length);
    });

    it("allows multiple player to enter", async () => {
      await lottery.enter({
        from: accounts[2],
        value: web3.utils.toWei("0.02", "ether"),
      });

      await lottery.enter({
        from: accounts[3],
        value: web3.utils.toWei("0.02", "ether"),
      });

      await lottery.enter({
        from: accounts[4],
        value: web3.utils.toWei("0.02", "ether"),
      });

      const players = await lottery.getPlayers({ from: accounts[2] });

      assert.equal(accounts[2], players[1]);
      assert.equal(accounts[3], players[2]);
      assert.equal(accounts[4], players[3]);
      assert.equal(4, players.length);
    });

    it("requires a minimum amount of ether to enter", async () => {
      await lottery.enter({
        from: accounts[5],
        value: 0,
      }).should.be.rejected;
    });

    it("only manager can call pickWinner", async () => {
      await lottery.pickWinner({
        from: accounts[5],
      }).should.be.rejected;
    });

    it("sends money to the winner and resets the players array", async () => {
      await lottery.enter({
        from: accounts[0],
        value: web3.utils.toWei("2", "ether"),
      });

      const initialBalance = await web3.eth.getBalance(accounts[0]);
      await lottery.pickWinner({ from: accounts[0] });
      const finalBalance = await web3.eth.getBalance(accounts[0]);
      const difference = finalBalance - initialBalance;

      assert(difference > web3.utils.toWei("1.8", "ether"));
    });
  });
});
