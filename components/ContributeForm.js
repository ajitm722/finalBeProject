import React from 'react'
import { Input } from 'semantic-ui-react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';
import { Message } from 'semantic-ui-react'

class ContributeForm extends React.Component{

    // this is value which user enters in the form to contribute when this value changes then the page renders again
    state={
        value: '',
        loading: false,
        errorMessage: ''
    };

    // when the form will be submitted then this functin will be called
    onSubmit= async (event)=>{
        event.preventDefault();
        
        this.setState({loading:true, errorMessage:''});
        const campaign = Campaign(this.props.address);
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            // refres the current page so that we can see the updated data
            Router.replaceRoute(`/campaigns/${this.props.address}`)

        } catch (err) {
            console.log(err);
            this.setState({errorMessage: err.message});
        }

        this.setState({loading:false, value:''});

    };


    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} style={{ marginRight: '30px'}}>
            <Form.Field>
                <label style={{ fontSize : '24px' }}>Amount to contribute</label>
                <Input 
                    value={this.state.value}
                    onChange={event=>this.setState({value: event.target.value})}
                    label = "ether"
                    labelPosition="ether"
                    labelPosition="right"
                    style={{ marginTop: '10px'}}
                />

                <Message error header="Oops!" content={this.state.errorMessage} />

                <Button
                 primary
                 loading={this.state.loading} style={{ marginTop: '10px'}}>
                    contribute!
                </Button>
            </Form.Field>
        </Form>
        );
    }
}

export default ContributeForm;