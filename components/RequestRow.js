import React, {Component} from 'react';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import web3 from '../ethereum/web3';

import Campaign from '../ethereum/campaign';
// props - key-index, request-Request struct, address-campaign address, id-index, 
// totalApproversCount=total number of people subscribed to this campaign
class RequestRow extends Component{

    onApprove = async (event) =>{
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
    };

    onDisapprove = async (event) =>{
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.disapproveRequest(this.props.id).send({
            from: accounts[0]
        });
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
        var c = a+b;
        var d = this.props.totalApproversCount;
        var ret = c+"/"+d;
        return ret;
    }

    render(){

        const readyToFinalize = this.props.request.approvalCount>this.props.approversCount/2;

        return (
            <Table.Row disabled={this.props.request.complete} positive={readyToFinalize && !this.props.request.complete}>

                <Table.Cell>{this.props.id}</Table.Cell>
                <Table.Cell>{this.props.request.description}</Table.Cell>
                <Table.Cell>{web3.utils.fromWei(this.props.request.value,'ether')}</Table.Cell>
                <Table.Cell>{this.props.request.recipient}</Table.Cell>
                <Table.Cell>{this.votes}</Table.Cell>

                <Table.Cell>
                    {this.props.request.complete ? null:(<Button color="green" basic onClick={this.onApprove}>
                        Approve-{this.props.request.approvalCount}
                    </Button>)
                    }
                </Table.Cell>

                <Table.Cell>
                    {this.props.request.complete ? null : (<Button color="teal" basic onClick={this.onDisapprove}>
                        Disapprove-{this.props.request.disapprovalCount}
                    </Button>)}
                    
                </Table.Cell>
                
            </Table.Row>
        );
    }
}

export default RequestRow;