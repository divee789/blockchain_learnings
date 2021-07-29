// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "./TweetherToken.sol";

contract TweetherICO {
    TweetherToken token;

    uint256 public RATE = 1000; // 1 ETH = 1000 TWE

    constructor(address _tokenAddr) {
        token = TweetherToken(_tokenAddr);
    }

    function _getTokenAmount(uint256 _weiAmount)
        internal
        view
        returns (uint256)
    {
        uint256 amount = _weiAmount / (10**18);
        return amount * RATE;
    }

    // Add a fallback function:
    fallback() external payable {
        uint256 _amount = _getTokenAmount(msg.value);

        token.transfer(msg.sender, _amount);
    }

    receive() external payable {
        uint256 _amount = _getTokenAmount(msg.value);

        token.transfer(msg.sender, _amount);
    }
}
