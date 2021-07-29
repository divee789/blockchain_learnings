// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract Owned {
    address payable public ownerAddr;
    address payable public newOwner;

    event OwnershipTransferred(address indexed _from, address indexed _to);

    constructor() {
        ownerAddr = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    function transferOwnership(address payable _newOwner) public onlyOwner {
        // The new address cannot be null:
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }

    function acceptOwnership() public {
        require(msg.sender == newOwner);
        emit OwnershipTransferred(ownerAddr, newOwner);
        ownerAddr = newOwner;
        newOwner = payable(address(0));
    }
}
