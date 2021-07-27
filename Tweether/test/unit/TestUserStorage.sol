// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
    UserStorage userStorage;

    constructor() {
        userStorage = new UserStorage();
        userStorage.setControllerAddr(address(this));
    }

    function testCreateFirstUser() public {
        uint256 _expectedId = 1;

        Assert.equal(
            userStorage.createUser(
                address(0),
                "divine",
                "Divine",
                "Olokor",
                "I like building stuff",
                "divee789@gmail.com"
            ),
            _expectedId,
            "Should create user with ID 1"
        );
    }
}
