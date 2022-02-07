pragma solidity ^0.4.17;


contract CampaignFactory{
    address[] public deployedContracts;
    mapping(address=>bool) public isUserExsits;

    function createCampaign(uint minimum, string orgName) public{
        require(!isUserExsits[msg.sender]);
        isUserExsits[msg.sender] = true;
        address newCampaign = new Campaign(minimum, msg.sender, orgName);
        deployedContracts.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedContracts;
    }
}


contract Campaign{
    
    struct Request{
        string newsTitle;
        string description;
        uint value;
        address recipient;
        bool complete;
        uint trueValue;
        mapping(address=>bool) approvals;
        mapping(address=>bool) disapproval;
        uint approvalCount;
        uint disapprovalCount;
 
    }
    
    address public manager;
    uint public minimumContribution;
    Request[] public requests;
    mapping(address=>bool) public approvers;
    uint public approversCount;
    int public reputationScore;
    string public orgName="";

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creater, string title) public{
        manager = creater;
        minimumContribution = minimum;
        orgName = title;
    }
    
    //send money to contract
    function contribute() public payable{
        require(msg.value> minimumContribution);
        
        if(!approvers[msg.sender]){
            approvers[msg.sender] = true;

            approversCount++;
        }
    }
    
    function createRequest(string title, string description, uint value, address recipient) public restricted {
        //specifiying memory creates  a new instance in the memory
        Request memory newRequest = Request({
           newsTitle: title,
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           trueValue: 0,
           approvalCount: 0,
           disapprovalCount: 0
        });
        
       // Request(description, value, recipient, false);
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage temp = requests[index];
        
        //check is the person has already donated to the campaign
        require(approvers[msg.sender]);
        
        //checking if the sender has voted earlier or not
        require(!temp.approvals[msg.sender] && !temp.disapproval[msg.sender]);

        //check if its complete
        require(!temp.complete);
        temp.approvals[msg.sender]=true;
        temp.approvalCount++;
        uint half = approversCount/2;
        if(temp.approvalCount>temp.disapprovalCount && temp.approvalCount+temp.disapprovalCount>half){
            temp.trueValue = 1;
            reputationScore=reputationScore+1;
            temp.complete = true;
        }
       
    }

    function disapproveRequest(uint index) public {
        Request storage temp = requests[index];
        
        //check is the person has already donated to the campaign
        require(approvers[msg.sender]);
        
        //checking if the sender has voted earlier or not
        require(!temp.approvals[msg.sender] && !temp.disapproval[msg.sender]);

        
        //check if its complete
        require(!temp.complete);
        
        temp.disapproval[msg.sender]=true;
        temp.disapprovalCount++;
        uint half = approversCount/2;
        if(temp.disapprovalCount>temp.approvalCount && temp.approvalCount+temp.disapprovalCount>half){
            temp.trueValue = 2;
            reputationScore=reputationScore-2;
            temp.complete = true;
        }
    }

    // function finalizeRequest(uint index) public restricted{
        
    //     Request storage temp = requests[index];
    //     require(temp.trueValue==1);        
    //     temp.recipient.transfer(temp.value);
    //     temp.complete = true;
    // }
    
   function getSummary() public view returns ( uint, uint, uint, uint, address){
        return(
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }
    
    function getRequestCount() public view returns (uint){
        return requests.length;
    }
    
}