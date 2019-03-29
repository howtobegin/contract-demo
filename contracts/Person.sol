pragma solidity ^0.4.23;

contract Person{
    uint age = 10;
    function increaseAge(string name, uint num) returns (uint){
        return ++age;
    }
    
    function getAge() public view returns (uint){
        return age;
    }

}
