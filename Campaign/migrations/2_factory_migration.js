const Campaign = artifacts.require("Campaign");
const CampaignFactory = artifacts.require("CampaignFactory");

module.exports = (deployer) => {
  deployer
    .deploy(Campaign)
    .then(() => deployer.deploy(CampaignFactory, Campaign.address));
};
