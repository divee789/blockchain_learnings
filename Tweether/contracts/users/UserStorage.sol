// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "../helpers/BaseStorage.sol";

contract UserStorage is BaseStorage {
    struct Profile {
        uint256 id;
        bytes32 username;
    }

    mapping(uint256 => Profile) public profiles;

    uint256 latestUserId = 0;

    function createUser(bytes32 username)
        public
        onlyController
        returns (uint256 id)
    {
        latestUserId++;

        profiles[latestUserId] = Profile(latestUserId, username);

        return latestUserId;
    }

    // This is redundant becuase we have defined public on the profiles variable. So an automatic getter is specified on the profiles by solidity by default
    // function getUserFromId(uint256 _userId)
    //     public
    //     view
    //     returns (uint256, bytes32)
    // {
    //     return (profiles[_userId].id, profiles[_userId].username);
    // }
}
