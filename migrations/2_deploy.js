var GambaCoin = artifacts.require("./GambaCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(GambaCoin);
};
