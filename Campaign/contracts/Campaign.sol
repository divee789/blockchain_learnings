// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;

    modifier managerOnly() {
        require(msg.sender == manager);
        _;
    }

    function startCampaign(uint256 minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
    }

    function createRequest(
        string memory description,
        uint256 value,
        address recipient
    ) public managerOnly {
        require(approvers[msg.sender]); // You must contribute before you can create a request
        Request memory newRequest = Request(
            description,
            value,
            recipient,
            false
        );

        requests.push(newRequest);
    }
}
