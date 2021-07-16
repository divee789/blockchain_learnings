const Lottery = artifacts.require("Lottery");

module.exports = (deployer) => {
  // Deploy it!
  deployer.deploy(Lottery);
};
