import React from "react";
import HeadTwoStyle from "./styled/HeadTwoStyle";
import { WebApp } from "./WebApp";
import styled from "styled-components";
import "../App.css";
import { motion } from "framer-motion";

const Section = styled.div`
  /* mobile */
  @media only screen and (max-width: 860px) {
    flex-direction: column;
  }
  display: flex;
  margin: 5rem 12rem;
  align-items: flex-start;
  text-align: left;
  /* justify-content: center; */
  /* max-width: 100%; */
  /* height: auto; */
  color: black;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    color: #666666 !important;
    font-weight: 300;
  }
  h1::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1px;
    margin: 1em 0;
    width: 6em;
  }
`;

export const Body = () => {
  const section = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className="margin-tb">
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Prototype based on UI design</h1>
            <p className = 'p'>
              Upload a web design and create a Vue prototype.
            </p>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/upload-image-drawers.gif" />
      </Section>
      <Section>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/component_creation.gif" />
        <HeadTwoStyle>
          <div>
            <h1 className = 'r'>Create components</h1>
            <p className = 'p2'>
              Add as many components to meet your application requirements. Build them right over your design. 
            </p>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Establish parent-child hierarchy</h1>
            <p className = 'p'>
              Designate relationships between your components before or after creating them. 
            </p>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/HTML-elements-tree-rerender.gif" />
      </Section>
      <Section>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/snippets-active-component.gif" />
        <HeadTwoStyle>
          <div>
            <h1 className = 'r'>View live code snippets</h1>
            <p className = 'p2'>
              Check the dashboard to see how the component template file will be exported. 
            </p>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Add Vue routes</h1>
            <p className = 'p'>
              You can add new routes and view all components associated with that particular route.
            </p>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/sidebar-components-routes.gif" />
      </Section>
      <WebApp />
    </div>
  );
};
