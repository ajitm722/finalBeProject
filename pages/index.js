import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Campaign from '../ethereum/campaign';
import CampaignModel from '../model/CampaignModel';
import Particles from "react-tsparticles";

const particleParams = {
    fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  background: {
    image:
      "linear-gradient(white,black)"
  },
  retina_detect: true
};
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

        

        return { campaignObject };
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
                description: <Link route={`/campaigns/${this.props.campaignObject[i].address}`}><a style = {{ fontSize : '15px' }}>View Organization</a></Link>,
                fluid: true,
                raised: true,
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

        return <Card.Group textAlign='center' items={items} style = {{ fontSize : '25px' }}/>;
    }
    
    render(){
        // start reading from here 
        return (
            // we are taking wrapping the data inside the div to the layout and this entire div will be passed as
            //children to the layout .
            //this is kind of fragment where layout is the parent and the data inside the layout is 
            // the childrens which will be keep swapping.

            //then check out the layout
            <div>
                {/* <Particles className="particles" params={particleParams} /> */}
            <Layout>

                <div style = {{marginLeft:'20px' , marginRight:'20px' , marginTop:'20px'}}>
                    <h3 style={{ marginTop: '20px' , fontSize : '35px' , marginLeft: '20px',marginBottom: '20px' }}>News Organizations Registered on Platform:</h3>

                    {/*This button code is again taken from semantic ui documentation  */}
                    <Link route="/campaigns/new">
                        <a >
                            <Button 
                                content="Register Organization"
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


                </div>

            </Layout>
            </div>
        );
    }

}
export default CampaignIndex;
