import React from 'react'
import Header from './Header'
import { Container } from 'semantic-ui-react';

// this head tag allows us to put the data in the head section of html document
import Head from 'next/head';

//here props is the children or the data inside layout tag in the index.js or any other file that uses layout
export default props => {
    return (

        // This container is again from semantic ui this container is used to wrap around the data to a max width
        <Container>
            {/* this link tag is placed here because as layout will be present in all the pages
            the reason we have wrapped the link in head tag is that this link will directly go inside the head section 
            of our html
            this is the feature from next.js */}
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            
            
            {/* go and check out header */}
            <Header />
            {/* This is the children or the data which will be inside the layout where we have used it like in the index.js file */}
            {props.children}
        </Container>
    );
};
