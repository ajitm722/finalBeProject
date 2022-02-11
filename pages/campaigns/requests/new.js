import React, { Component } from "react";
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from '../../../routes';
import Layout from "../../../components/Layout";

class RequestNew extends Component{

    state={
        value:'',
        description:'',
        newsTitle:'',
        recipient:'',
        loading:false,
        errorMessage:''
    }

    static async getInitialProps(props){
        const { address } = props.query;

        return { address };
    }

    onSubmit=async (event)=>{
        event.preventDefault();

        this.setState({loading:true, errorMessage:''});

        const campaign = Campaign(this.props.address);
        const {newsTitle, description, value, recipient } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(newsTitle, description, web3.utils.toWei(value, 'ether'), recipient)
            .send({
                from: accounts[0]
            });
            
            // navigate back to the request lists
            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
            
        } catch (err) {
            this.setState({errorMessage:err.message});
        }

        this.setState({loading:false});


    }

    render(){
        return(

            <Layout>

                {/* <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>
                            Back
                    </a>
                </Link> */}

                <h3 style= {{marginLeft:'40px' , fontSize: '30px'}}>Create a Request</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} style= {{marginLeft:'40px',marginTop:'30px' ,marginRight:'50px', fontSize: '20px'}}>
                    <Form.Field>
                            <label style= {{marginBottom:'20px' , fontSize: '20px'}}>News Title</label>
                            <Input 
                                value ={this.state.newsTitle}
                                onChange={ event=>this.setState({ newsTitle:event.target.value }) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label style= {{marginBottom:'20px' , fontSize: '20px'}}>Description</label>
                        <Input 
                            value ={this.state.description}
                            onChange={ event=>this.setState({ description:event.target.value }) }
                        />
                    </Form.Field>
                    
                    <Form.Field>
                        <label style= {{marginBottom:'20px' , fontSize: '20px'}}>Value in Ether</label>
                        <Input 
                            value ={this.state.value}
                            onChange={event=>this.setState({value:event.target.value})}
                        />                
                    </Form.Field>
                    
                    <Form.Field>
                        <label style= {{marginBottom:'20px' , fontSize: '20px'}}>Recipient</label>
                        <Input 
                            value ={this.state.recipient}
                            onChange={event=>this.setState({recipient:event.target.value})}
                        />
                    </Form.Field>

                    <Message
                        error
                        header="Oops!"
                        content={this.state.errorMessage}>

                    </Message>
                    

                    <Button
                    loading={this.state.loading}
                    primary style= {{marginBottom:'40px' , fontSize: '20px'}}>
                        Create
                    </Button>

                </Form>
            </Layout>
        );
    }
}
export default RequestNew;