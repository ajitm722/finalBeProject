import React, {Component} from 'react';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import web3 from '../ethereum/web3';

import Campaign from '../ethereum/campaign';
// props - key-index, request-Request struct, address-campaign address, id-index, 
// totalApproversCount=total number of people subscribed to this campaign
class RequestRow extends Component{

    state={
        loading: false   
    }

    onApprove = async (event) =>{
        this.setState({loading: true});
        try{
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.approveRequest(this.props.id).send({
                from: accounts[0]
            });
        }catch(error){

        }
        this.setState({loading: false});
        window.location.reload();
    };

    onDisapprove = async (event) =>{
        this.setState({loading: true});
        try{
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.disapproveRequest(this.props.id).send({
                from: accounts[0]
            });    
        }catch(error){

        }
        this.setState({loading: false});
        window.location.reload();
    };

    onFinalize = async (event) =>{
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
    };
    
    votes = () =>{
        var a = this.props.request.approvalCount;
        var b = this.props.request.disapprovalCount;
        var c = +a+ +b;
        var d = this.props.totalApproversCount;
        var ret = c+"/"+d;
        console.log("votes called");
        console.log(ret);
        return ret;
    }

    render(){

        const readyToFinalize = this.props.request.approvalCount>this.props.approversCount/2;
        const isTrue = this.props.request.trueValue==1;
        const isFalse = this.props.request.trueValue==2;
        return (
            <Table.Row positive={isTrue} negative={isFalse}>

                <Table.Cell>{this.props.id}</Table.Cell>
                <Table.Cell>{this.props.request.newsTitle}</Table.Cell>
                <Table.Cell><a href={this.props.request.description} target="_blank">Click here to read full news</a></Table.Cell>
                <Table.Cell>{this.votes()}</Table.Cell>

                <Table.Cell>
                    {this.props.request.trueValue!=0 ? null:(<Button loading={this.state.loading} color="green" basic onClick={this.onApprove}>
                        Approve:&nbsp;{this.props.request.approvalCount}
                    </Button>)
                    }
                </Table.Cell>

                <Table.Cell>
                    {this.props.request.trueValue!=0 ? null : (<Button loading={this.state.loading} color="red" basic onClick={this.onDisapprove}>
                        Disapprove: &nbsp;{this.props.request.disapprovalCount}
                    </Button>)}
                    
                </Table.Cell>
                
            </Table.Row>
        );
    }
}

export default RequestRow;