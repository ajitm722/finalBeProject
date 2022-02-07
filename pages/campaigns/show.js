import React from 'react'
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';
import { Grid, Button } from 'semantic-ui-react'

import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

import web3 from '../../ethereum/web3';


class CampaignShow extends React.Component{

    static async getInitialProps(props){
        // when we click on the campaign we pass the address in the query and this address term is written in route.js file
        // from the query we are taking the address and accessing the contract through the contract instance 
        // then calling the getSummary method to get the summary data from the campaign.sol file.
        // the summary contains minimum contribution, balance, requests, contributioncount, manager address
        console.log(props.query.address);
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        const title = await campaign.methods.orgName().call();
        const reputationScore = await campaign.methods.reputationScore().call();
        const totalApproversCount = await campaign.methods.approversCount().call();

        console.log(totalApproversCount)
        console.log(reputationScore);

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
            address: props.query.address,
            orgName: title,
            reputationScore: reputationScore
        };
    }

    renderCards() {
// this entire code is taken from semantic ui
        const {
            balance, 
            manager, 
            minimumContribution, 
            requestCount, 
            approversCount,
            title,
            reputationScore
        } = this.props;

        const items = [
            {
                header:manager,
                meta:'Address of manager',
                description:'The manager created this campaign and can create request to withdraw money',
                style:{
                    overflowWrap:'break-word'
                }
            },
            {
                header:minimumContribution,
                meta:'Minimum Contribution (wei)',
                description:'You must contribute atleast this much to become a approver',
                style:{
                    overflowWrap:'break-word'
                }
            },
            {
                header:requestCount,
                meta:'Number of Requests',
                description:'A request tries to withdraw money from the contract and send it to recipient, request must be approved by a approver',
                style:{
                    overflowWrap:'break-word'
                }
            },
            {
                header:approversCount,
                meta:'Number of approvers',
                description:'Number of people who have already donated to the campaign',
                style:{
                    overflowWrap:'break-word'
                }
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta:'Current balance of campaign (ether)',
                description:'Balance is how much money the campaign has to spend',
                style:{
                    overflowWrap:'break-word'
                }
            },
            {
                header: reputationScore,
                meta:'reputation score',
                description:'reputation score is based on your frequency of news Truthfullness',
                style:{
                    overflowWrap:'break-word'
                }
            }
        ];
        return <Card.Group items={items} />;
    }

    render(){
        return (
            <Layout>
                <h2>{this.props.orgName}</h2>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {/* created the card from the semantic ui  */}
                            {this.renderCards()}

                            
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                    <a>
                                        <Button primary>View News</Button>
                                    </a>
                                </Link>
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>

            </Layout>
        );
    };
}
export default CampaignShow;