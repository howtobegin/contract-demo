# contract-demo
## 编译部署
### tronbox 文件修改对应私钥，以及节点配置
```
    development: {
      // 私钥
      privateKey:'',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      origin_energy_limit:10000000,
      fullNode: "http://47.94.247.175:16667",
      solidityNode: "http://47.94.247.175:16668",
      eventServer: "http://47.94.247.175:18891/event",
      network_id: "*"
    }
```
### 2_deploy_contracts 修改需要部署的合约名字
```
var htlock = artifacts.require("./HashedTimelock.sol");
module.exports = function(deployer) {
  deployer.deploy(htlock, 1000000, "GUIDE", 6, "GD");
};
```
### 编译
```tronbox compile --compile-all```
### 部署
```tronbox migrate --reset```
## 合约调用合约例子
### 文件列表
* Person.sol
* CallPerson.sol
