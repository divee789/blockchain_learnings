// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(bytes32 _campaignName) public {
        Campaign campaign = new Campaign(_campaignName, msg.sender);
        deployedCampaigns.push(campaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    uint256 public approversCount;

    uint256 numRequest;
    mapping(uint256 => Request) requests;

    constructor(uint256 minimum address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    modifier managerOnly() {
        require(msg.sender == manager);
        _;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string memory description,
        uint256 value,
        address recipient
    ) public managerOnly {
        require(approvers[msg.sender]); // You must contribute before you can create a request

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

    function finalizeRequest(uint256 index) public managerOnly {
        Request storage request = requests[index];

        require(request.approvalCount >= approversCount); // Request approval count must be greater than or equal to the minimum approvalCount specified;
        require(!request.complete); // Request must not be complete

        request.recipient.transfer(request.value);

        request.complete = true; // Mark request as complete
    }
}
