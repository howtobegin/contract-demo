var Test = artifacts.require("./HashedTimelock.sol");
contract('Test', function(accounts) {
	it("call method getBaseInfo", function() {
	    Test.deployed().then(function(instance) {
		  return instance.call('getBaseInfo');
		}).then(function(result) {
		  assert.equal("method g()", result[0], "is not call method g");
	    });
	});
});
