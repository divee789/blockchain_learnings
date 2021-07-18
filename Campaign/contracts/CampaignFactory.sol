// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "./CloneFactory.sol";
import "./Campaign.sol";

contract CampaignFactory is CloneFactory {
    Campaign[] public deployedCampaigns;
    address public masterContract;
    mapping(address => Campaign[]) campaignsByOwner;

    constructor(address _masterContract) {
        masterContract = _masterContract;
    }

    function createCampaign(uint256 minimum) public {
        Campaign campaign = Campaign(createClone(masterContract));
        campaign.startCampaign(minimum, msg.sender);
        deployedCampaigns.push(campaign);
        campaignsByOwner[msg.sender].push(campaign);
    }

    function getDeployedCampaigns() public view returns (Campaign[] memory) {
        return deployedCampaigns;
    }

    function getOwnerCampaigns(address owner)
        public
        view
        returns (Campaign[] memory)
    {
        return campaignsByOwner[owner];
    }
}
