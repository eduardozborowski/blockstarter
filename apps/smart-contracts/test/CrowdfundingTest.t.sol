// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Crowdfunding} from "../src/Crowdfunding.sol";

contract CrowdfundingTest is Test {
    Crowdfunding public crowdfunding;

    address user = address(0x123);

    function setUp() public {
        crowdfunding = new Crowdfunding();
    }

    function test_Contribute() public {
        vm.deal(user, 1 ether);
        vm.prank(user);
        crowdfunding.contribute{value: 1 ether}();
        assertEq(crowdfunding.totalFunds(), 1 ether);
    }

    function test_Withdraw() public {
        vm.deal(address(this), 2 ether);
        crowdfunding.contribute{value: 2 ether}();
        uint256 balanceBefore = address(this).balance;
        crowdfunding.withdraw();
        assertEq(address(this).balance, balanceBefore + 2 ether);
        assertEq(crowdfunding.totalFunds(), 0);
    }
}