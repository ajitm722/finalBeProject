import Campaign from "../ethereum/campaign";

export default class CampaignModel{
    manager;
    minimumContribution;
    approversCount;
    reputationScore;
    address;
    orgName;
    campaignObj;
    constructor(address){
        this.address = address;
    }
    initilize = async() =>{
        this.campaignObj = Campaign(this.address);
        
        this.manager = await this.campaignObj.methods.manager().call();
        this.minimumContribution = await this.campaignObj.methods.minimumContribution().call();
        this.approversCount = await this.campaignObj.methods.approversCount().call();
        this.reputationScore = await this.campaignObj.methods.reputationScore().call();
        this.orgName = await this.campaignObj.methods.orgName().call();
    }
}
