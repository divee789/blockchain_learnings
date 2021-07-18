const { assert } = require("chai");

const CampaignFactory = artifacts.require("./CampaignFactory.sol");
const Campaign = artifacts.require("./Campaign.sol");

require("chai").use(require("chai-as-promised")).should();

contract("CampaignFactory", (accounts) => {
  let campaignFactory;
  let campaign;

  before(async () => {
    campaignFactory = await CampaignFactory.deployed();
    await campaignFactory.createCampaign(100, {
      from: accounts[0],
    });
    campaignAddress = await campaignFactory.getOwnerCampaigns(accounts[0]);
    campaign = await Campaign.at(campaignAddress[0]);
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await campaignFactory.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });

  describe("CampaignFactory", async () => {
    it("creates a campaign successfully", async () => {
      const address = await campaign.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("marks caller as the campaign owner", async () => {
      assert.equal(await campaign.getOwner(), accounts[0]);
    });
  });

  describe("Campaign", async () => {
    it("allows people to contribute money and marks them as approvers", async () => {
      await campaign.contribute({
        from: accounts[1],
        value: web3.utils.toWei("0.000000000000000101", "ether"),
      });
      await campaign.contribute({
        from: accounts[1],
        value: web3.utils.toWei("0.000000000000000101", "ether"),
      });
      const c = await campaign.getContribution({
        from: accounts[1],
      });
      //   console.log(c.toString(10));
      assert(await campaign.approvers(accounts[1]), true);
      assert((await campaign.contributions(accounts[1])) > 0);
    });

    it("requires a minimum contribution", async () => {
      await campaign.contribute({
        from: accounts[2],
        value: web3.utils.toWei("0.000000000000000001", "ether"),
      }).should.be.rejected;
    });

    it("allows owner to make payment request", async () => {
      await campaign.createRequest("DevOps", "100", accounts[1], {
        from: accounts[0],
      });
      console.log("reuqetas");
      console.log("reuqetas", campaign.requests[0]);

      //   assert((await campaign.requests[0].call()).description, "DevOps");
    });
  });
});
