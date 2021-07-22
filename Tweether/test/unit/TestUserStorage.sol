// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
    function testCreateFirstUser() public {
        // Get the deployed contract
        UserStorage _storage = UserStorage(DeployedAddresses.UserStorage());

        uint256 _expectedId = 1;

        Assert.equal(
            _storage.createUser("divine"),
            _expectedId,
            "Should create user with ID 1"
        );
    }
}
