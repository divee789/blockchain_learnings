// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address payable recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    address public owner;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    mapping(address => uint256) public contributions;
    uint256 public approversCount;

    uint256 numRequest;
    mapping(uint256 => Request) public requests;

    function startCampaign(uint256 minimum, address creator) public {
        owner = creator;
        minimumContribution = minimum;
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "Sender not authorized");
        _;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function contribute() public payable {
        require(
            msg.value > minimumContribution,
            "Minimum contribution not reached"
        );

        approvers[msg.sender] = true;
        approversCount++;
        contributions[msg.sender] += msg.value;
    }

    function getContribution() public view returns (uint256) {
        return contributions[msg.sender];
    }

    function createRequest(
        string memory description,
        uint256 value,
        address payable recipient
    ) public ownerOnly {
        Request storage r = requests[numRequest++];

        r.approvalCount = 0;
        r.value = value;
        r.description = description;
        r.recipient = recipient;
        r.complete = false;
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]); // You must be an approver to approve a request
        require(!request.approvals[msg.sender]); // You can't approve a request twice

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public ownerOnly {
        Request storage request = requests[index];

        require(request.approvalCount >= approversCount); // Request approval count must be greater than or equal to the minimum approvalCount specified;
        require(!request.complete); // Request must not be complete

        request.recipient.transfer(request.value);

        request.complete = true; // Mark request as complete
    }
}
