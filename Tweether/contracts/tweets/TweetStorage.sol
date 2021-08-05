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
    mapping(uint256 => uint256[]) userTweetIds;
    uint256[] public tweetIds;

    uint256 latestTweetId = 0;

    //Emitted when createTweet function is called
    event NewTweet(uint256 indexed userId, uint256 indexed tweetId);

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
        userTweetIds[_userId].push(latestTweetId);
        tweetIds.push(latestTweetId);
        emit NewTweet(_userId, latestTweetId);

        return latestTweetId;
    }

    function getTweetIdsFromUser(uint256 _userId)
        public
        view
        returns (uint256[] memory)
    {
        return userTweetIds[_userId];
    }

    function getNumTweets() public view returns (uint256 _numTweets) {
        return tweetIds.length;
    }
}
