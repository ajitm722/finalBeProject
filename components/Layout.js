import React from 'react'
import Header from './Header'
import { Container } from 'semantic-ui-react';
import Particles from "react-tsparticles";

// this head tag allows us to put the data in the head section of html document
import Head from 'next/head';

const particleParams = {
    fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  background: {
    image:
      "linear-gradient(white,black)"
  },
  retina_detect: true
};

//here props is the children or the data inside layout tag in the index.js or any other file that uses layout
export default props => {
    return (

        // This container is again from semantic ui this container is used to wrap around the data to a max width
        <div><Particles className="particles" params={particleParams} />
        <Container fluid style={{ marginTop: '10px' , background : 'linear-gradient(white,black)'  }}>
            
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
        </div>
    );
};
