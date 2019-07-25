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
            <p className="p">
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
            <h1 className="r">Create components</h1>
            <p className="p2">
              To add a new component, type its name in the component name box
              and select any HTML elements that should be rendered by that
              component. Select a parent component for the new component if
              needed. After adding, you can move and resize the component in the
              display.
            </p>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Establish parent-child hierarchy</h1>
            <p className="p">
              You can also add children to components by right-clicking the
              component to add children to, and you can see the tree rerender as
              you create new components or change the hierarchy.
            </p>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/HTML-elements-tree-rerender.gif" />
      </Section>
      <Section>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/snippets-active-component.gif" />
        <HeadTwoStyle>
          <div>
            <h1 className="r">View live code snippets</h1>
            <p className="p2">
              The dashboard shows info about each component (code snippets and
              HTML elements). Click a component in the display to see its
              properties.
            </p>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Add Vue routes</h1>

            <p className="p">
              You can add new routes and view all components and routes in the
              sidebar. When finished creating, you can export to a file location
              of your choice!
            </p>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/sidebar-components-routes.gif" />
      </Section>
      <WebApp />
    </div>
  );
};
