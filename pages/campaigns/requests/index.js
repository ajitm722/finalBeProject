import React, {Component} from "react";
import Layout from "../../../components/Layout";
import { Button } from 'semantic-ui-react'
import { Link } from '../../../routes'
import Campaign from "../../../ethereum/campaign";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import RequestRow from "../../../components/RequestRow";
import Layoutdefault from "../../../components/Layoutdefault";

class RequestIndex extends Component{

    static async getInitialProps(props){
        const { address } = props.query;
        console.log(address);
        const campaign = Campaign(address);

        //total number of news
        const requestCount = await campaign.methods.getRequestCount().call();
        console.log(requestCount);

        var myrequests = [];
       
        for(var i=0; i<requestCount; i++){
            const currReq = await campaign.methods.requests(i).call();
            myrequests.push(currReq);
        }
        console.log(myrequests);

        //this is some fancy js inshort it gets us all the request from our contract
        //we have to use this because solidity doesnt have facility to return Request struct
        // const requests = await Promise.all(
        //     Array(requestCount).fill().map((element, index)=>{
        //         return campaign.methods.requests(index).call()
        //     })
        // );
        // const first = await campaign.methods.requests(1).call();
        // console.log(first);
        // // getting the total number of approvers for the approval count column in request row
        const totalApproversCount = await campaign.methods.approversCount().call();
        // console.log(approversCount);
        // console.log(request);
        // return { address, requests, requestCount, approversCount };
        return { address, requestCount, myrequests, totalApproversCount };
    }

    //used to render row for each request
    renderRows(){
        return this.props.myrequests.map((request, index)=>{
            return (
                <RequestRow 
                    key={index}
                    request={request}
                    address={this.props.address}
                    id={index}
                    totalApproversCount={this.props.totalApproversCount}
                    newsTitle = {this.props.newsTitle}
                />
            );
        });
    }

    render(){
        return(
            <Layoutdefault>
                <h3 style= {{marginLeft:'40px' , fontSize: '30px'}}>Articles Published by the Organization </h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" style={{marginBottom: 10 , marginRight:'30px'}}>Add News Article</Button>
                    </a>
                </Link>


                <Table celled style= {{  fontSize: '20px' }}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>News Title</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Voted/Total</Table.HeaderCell>
                            <Table.HeaderCell>Approve</Table.HeaderCell>
                            <Table.HeaderCell>Disapprove</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.renderRows()}
                    </Table.Body>
                </Table>

                <div>
                    Found {this.props.requestCount} requests
                </div>


            </Layoutdefault>
            
        );
        
    }
}

export default RequestIndex;