var htlock = artifacts.require("./HashedTimelock.sol");

module.exports = function(deployer) {
  //deployer.deploy(MyContract);
  deployer.deploy(htlock, 1000000, "GUIDE", 6, "GD");
  //deployer.deploy(htlock);
};
