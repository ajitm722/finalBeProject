import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends React.Component{
    
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
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
        const items = this.props.campaigns.map(address =>{
            return{
                header: address,
                description: <Link route={`/campaigns/${address}`}><a>View Organization</a></Link>,
                fluid: true
            };
        });

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


                </div>

            </Layout>

        );
    }

}
export default CampaignIndex;
