// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Crowdfunding} from "../src/Crowdfunding.sol";

contract ContributeScript is Script {
    Crowdfunding public crowdfunding;

    address contractAddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3;

    function setUp() public {
        crowdfunding = Crowdfunding(contractAddress);
    }

    function run() public {
        vm.startBroadcast();

        crowdfunding.contribute{value: 1 ether}();

        vm.stopBroadcast();
    }
}
