// SPDX-License-Identifier: GPL-3.0
pragma solidity '0.8.9';

contract Cryptolearn {
    address[] public allUsers;
    mapping(address => bool) users;
    mapping(address => uint) totalTokens;

    function createUser() public {
        require(!users[msg.sender]);
        users[msg.sender] = true;
        totalTokens[msg.sender] = 0;
        allUsers.push(msg.sender);
    }

    function isAUser() public view returns(bool){
        bool ans = users[msg.sender];
        return ans;
    }

    function getTokens(address user) public view returns(uint){
        uint ans = totalTokens[user];
        return ans;
    }

    function getTotalTokens() public view returns(uint){
        uint ans = totalTokens[msg.sender];
        return ans;
    }

    function getAllUsers() public view returns(address[] memory){
        return allUsers;
    }

    function giveToken(uint tokens) public payable {
        totalTokens[msg.sender] = totalTokens[msg.sender] + tokens;
    }

    function transact(uint cost) public payable {
        totalTokens[msg.sender] = totalTokens[msg.sender] - cost;
    }
}