// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Crowdfunding {
    address public owner;
    uint256 public totalFunds;

    constructor() {
        owner = msg.sender;
    }

    function contribute() public payable {
        require(msg.value > 0, "Must send ETH");
        totalFunds += msg.value;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner");
        require(totalFunds > 0, "Nothing to withdraw");

        uint256 amount = totalFunds;
        totalFunds = 0;
        payable(owner).transfer(amount);
    }
}