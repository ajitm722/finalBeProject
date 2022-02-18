import Campaign from "../ethereum/campaign";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {loadDB} from "../firebase/firebase";

export default class CampaignModel{
    manager;
    minimumContribution;
    approversCount;
    reputationScore;
    address;
    orgName;
    campaignObj;
    imageUrl;
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
        const storageAndFirestore = await loadDB();
        const starsRef = ref(storageAndFirestore.storage, `images/${this.manager}`);
        getDownloadURL(starsRef)
        .then((url)=>{
            console.log("image url from model "+ url);
            this.imageUrl = url;
        })
        .catch((err)=>{
            console.log(err);
        });
        
    }
}
