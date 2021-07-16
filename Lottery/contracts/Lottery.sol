// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract Lottery {
    string public name;
    address public manager;
    address[] public players;

    constructor() {
        name = "Blockchain Lottery";
    }

    modifier managerOnly() {
        require(msg.sender == manager);
        _;
    }

    function Manager(address addr) public {
        manager = addr;
    }

    function enter() public payable {
        require(msg.value > .01 ether);

        players.push(msg.sender);
    }

    function random() private view managerOnly returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.difficulty, block.timestamp, players)
                )
            );
    }

    function pickWinner() public managerOnly {
        uint256 index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}
