import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
            <Menu style={{ marginTop: '20px' , fontSize : '24px' }}>
                   <Link route='/' >
                       <a className="item" style = {{ fontSize : '30px' , fontWeight:'bold'}}>Decentralized News Publication Platform Leveraging Ethereum And Solidity for Fake News Detection and Classification</a>
                   </Link> 

                <Menu.Menu position="right">
                   
                    <Link route='/'>
                       <a className="item">Organizations</a>
                   </Link> 
                   
                   <Link route='/campaigns/new'>
                       <a className="item" style = {{fontSize : '15px'}} >+</a>
                   </Link> 
               
                </Menu.Menu>
            </Menu>
    );
};
