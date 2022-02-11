// as this file is in the campaign/new.js then the url will be 
// https://crowdcoin/campaign/new

//there are hell lot of things in this area read carefully

import React, { Component } from 'react'
import Layout from '../../components/Layout';

import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'


import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

import { Router } from '../../routes';

class CampaignNew extends Component{

    //this state is defined when we created form
    //whenever the user canges the minimum contribution input then we want our page to be re rendered
    state={
        minimumContribution:'',
        // error message is used when the used enters some invalid input in the text box or anything wrong
        errorMessage:'',
        // this is used to show the user that the transaction is processing 
        loading: false,
        title: ""
    };

    //this onSubmit is used when the form will be submitted
    onSubmit = async (event) => {
        event.preventDefault();

        try {

            //turn on the spinner to show we are performing the transactions
            this.setState({loading: true, errorMessage: ''});

            const accounts = await web3.eth.getAccounts();
            // now here we can create a campaign by using the createCampaign function in our campaign factory contract
            // we are sending a transaction in here
            await factory.methods.createCampaign(this.state.minimumContribution, this.state.title)
            .send({
                from:accounts[0]
            });

            //immediately after we sucessfully created the campaign we want o redirect to root 
            Router.pushRoute('/');

        } catch (error) {
            // when ever we get an error we can change the errorMessage state property which will indeed 
            // let the page reload and show some messge to the used so that user can come to know what went wrong
            this.setState({errorMessage: error.message});
        }

        this.setState({loading: false});
    }

    render() {
        return (
            <Layout >
                {this.state.minimumContribution} {this.state.title}
                <h3 style={{ marginLeft: '30px' , fontSize: '30px'}}>Register News Organization</h3>

                {/* This form is again taken from the semantic ui docs */}
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} style={{ marginLeft: '30px',marginRight: '30px'}}>
                    {/* notice we havent written this.onSubmit() with paranthesis as we dont want it to 
                    execute immediately we want it to get executed in some point of time when the form will 
                    get submitted */}
                    {/* also we have error setted to form which helps it to show the errors 
                    please dont ask why !! is used , it basically flips true to false and false to true. use the js console to 
                    see whats going on */}

                    <Form.Field>
                        <label style={{fontSize: '20px' , marginTop:'40px',marginBottom:'10px'}}>Minimum Contribution</label>

                        {/* This input is taken from semantic use see the docs for code */}
                        <Input
                            label="wei"
                            labelPosition='right'
                            placeholder='Enter minimum contribution'

                            // this value is been attatched with the state minimum contribution as this will help 
                            //render our page whenever the value is changes the minimumContribution gets the value of 
                            //event.target.value
                            value = {this.state.minimumContribution}
                            onChange={event=>this.setState({minimumContribution: event.target.value})}
                        />   

                    </Form.Field>
                    <Form.Field>
                        <label style={{fontSize: '20px' , marginTop:'30px',marginBottom:'10px'}}>Title</label>

                        {/* This input is taken from semantic use see the docs for code */}
                        <Input
                            label="Text"
                            labelPosition='right'
                            placeholder='Enter title'

                            // this value is been attatched with the state minimum contribution as this will help 
                            //render our page whenever the value is changes the minimumContribution gets the value of 
                            //event.target.value
                            value = {this.state.title}
                            onChange={event=>this.setState({title: event.target.value})}
                        />   

                    </Form.Field>
                    

                    {/* incase any error occurs with the form submittion we can show the error */}
                    {/* this Message component is taken from the semantic ui */}
                    <Message
                        error 
                        header="Oops!"
                        content={this.state.errorMessage}
                    ></Message>


                    <Button 
                        loading={this.state.loading}
                        type='submit' primary style={{ marginTop:'20px',marginBottom:'30px'}}>
                            Create
                    </Button>
                </Form>


            </Layout>
        );
    }
}

export default CampaignNew;