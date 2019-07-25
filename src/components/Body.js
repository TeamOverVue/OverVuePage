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
              Upload an mockup from your filesystem if you'd like. Remove the
              mockup and choose a new one if needed.
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
              Type your component name and add desired HTML elements. Select a parent component. Resize and mock your component on the canvas
              display.
            </p>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Hierarchy</h1>
            <p className = 'p'>
              Right-click your component to adjust hierarchy after creation. Visualize changes in your tree.
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
              Code snippets are auto generated when components are created. Click a component in the display to see its
              code and its HTML elements.
            </p>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Add Vue routes</h1>
  
            <p className = 'p'>
              Keep track of components and routes in the
              sidebar. When finished satisfied, you can export to your project to your file system.
            </p>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/sidebar-components-routes.gif" />
      </Section>
      <WebApp />
    </div>
  );
};
