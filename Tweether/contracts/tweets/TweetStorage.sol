// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "../helpers/BaseStorage.sol";

contract TweetStorage is BaseStorage {
    struct Tweet {
        uint256 id;
        string text;
        uint256 userId;
        uint256 postedAt;
    }

    mapping(uint256 => Tweet) public tweets;

    uint256 latestTweetId = 0;

    function createTweet(uint256 _userId, string memory _text)
        public
        onlyController
        returns (uint256)
    {
        latestTweetId++;

        tweets[latestTweetId] = Tweet(
            latestTweetId,
            _text,
            _userId,
            block.timestamp
        );

        return latestTweetId;
    }
}
