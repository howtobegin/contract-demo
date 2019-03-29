pragma solidity ^0.4.23;

contract CallPerson{
    function callByFun(address addr) returns(bool){
        bytes4 methodId = bytes4(keccak256("increaseAge(string,uint256)"));
        return addr.call(methodId,"jack", 1);
    }
}
