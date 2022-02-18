import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Campaign from '../ethereum/campaign';
import CampaignModel from '../model/CampaignModel';
import RecentNews from '../components/RecentNews';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { loadDB } from '../firebase/firebase';
class CampaignIndex extends React.Component{
    
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        // console.log(campaigns);
        var title=[];
        var reputationScore=[];

        var campaignObject=[];
        campaignObject = campaigns.map(address=>{
            return new CampaignModel(address);
        });

        // console.log(campaignObject);

        const promisesObjs = campaignObject.map(async obj=>{
            const tempObj = await obj.initilize();
            return tempObj;
        })
        await Promise.all(promisesObjs);

        campaignObject.sort((a,b)=>{
            if(a.reputationScore<b.reputationScore){
                return 1;
            }
            else if(a.reputationScore>b.reputationScore){
                return -1;
            }
            return 0;
        })

        const storageAndFirestore = await loadDB();
        console.log("connecting to firestore");
        const collectionRef = collection(storageAndFirestore.firestore, "recentNews");
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);
        const recentNews=[];
        querySnapshot.forEach((doc)=>{
            recentNews.push({...doc.data()});
        })
        console.log(recentNews)
        // console.log("objects")
        // console.log(campaignObject);
        // console.log("objects")

        // const promises = campaigns.map(async campaign=>{
        //     const camp = Campaign(campaign);
        //     const summ = await camp.methods.orgName().call();
        //     return summ;
        // })
        // title = await Promise.all(promises)

        // const promisesRS = campaigns.map(async campaign=>{
        //     const camp = Campaign(campaign);
        //     const rs = await camp.methods.reputationScore().call();
        //     return rs;
        // })
        // reputationScore = await Promise.all(promisesRS);

        // const titleRs = [];
        // for(var i=0; i<reputationScore.length; i++){
        //     titleRs.push({title: title[i], reputationScore: reputationScore[i]});
        // }

        // titleRs.sort((a, b)=>{
        //     return b.reputationScore-a.reputationScore;
        // })

        

        return { campaignObject, recentNews };
        // return {campaignObjects};
    }
    // this method only executes on the browser but if some one doesnt have metamask installed on their device 
    // we can use our server to get the data from contract this componentDiMOunt method is used to do the initial stuff so 
    // as next executes on its own server so at that server we will not have this initial data
    // for that we have getInitialProps method of React which will execute and works just like componendDidMount methods
    // async componentDidMount() {
    //     const campaigns = await factory.methods.getDeployedCampaigns().call();
    //     console.log(campaigns);
    // }


    // created-[1] this function is created using semantic ui library to display the campaigns
    // the below code for the card is taken from the semantic-ui docs they have good docs have a look
    //address here is nothing but the place where that address is placed.
    renderCampaigns(){
        var items=[];
        for(var i=0; i<this.props.campaignObject.length; i++){
            items.push({
                header: this.props.campaignObject[i].orgName,
                description: <Link route={`/campaigns/${this.props.campaignObject[i].address}`}><a>View Organization</a></Link>,
                fluid: true
            });
        }
        // console.log(items);
        // const items = this.props.campaigns.map(address =>{
        //     return{
        //         header: address,
        //         description: <Link route={`/campaigns/${address}`}><a>View Organization</a></Link>,
        //         fluid: true
        //     };
        // });

        return <Card.Group items={items} />;
    }
    
    render(){
        // start reading from here 
        return (
            // we are taking wrapping the data inside the div to the layout and this entire div will be passed as
            //children to the layout .
            //this is kind of fragment where layout is the parent and the data inside the layout is 
            // the childrens which will be keep swapping.

            //then check out the layout
            <Layout>

                <div>
                    <h3>Organizations</h3>

                    {/*This button code is again taken from semantic ui documentation  */}
                    <Link route="/campaigns/new">
                        <a>
                            <Button 
                                content="Create Organization"
                                icon="add circle"
                                primary
                                labelPosition="left"
                                floated="right"
                            />
                        </a>  
                    </Link>
                   

                    {/* calling the renderCampaign to show the open campaign that we got from the getInitialprops method
                    by making a call to contract */}
                    {this.renderCampaigns()}


                    <RecentNews />
                </div>

            </Layout>

        );
    }

}
export default CampaignIndex;
