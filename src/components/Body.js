import React from "react";
import HeadTwoStyle from "./styled/HeadTwoStyle";
import { WebApp } from "./WebApp";
import styled from "styled-components";
import "../App.css";
import { motion } from "framer-motion";

const Section = styled.div`
  /* mobile */
  @media only screen and (max-width: 860px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    .left {
      flex-direction: column;
    }
    .right {
      flex-direction: column;
    }
    img {
      margin: 0.5rem 0rem;
    }
    h1::after {
      margin: 1em auto;
    }
    margin: 2rem 12rem;
  }
  display: flex;
  margin: 5rem 12rem;
  align-items: flex-start;
  text-align: left;
  /* justify-content: center; */
  /* max-width: 100%; */
  /* height: auto; */
  color: black;
  max-width: 70vw;
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

  img {
    margin: 0rem 1.2rem;
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
        <div className="right">
          <HeadTwoStyle>
            <div>
              <h1>Prototype based on UI design</h1>
              <p className="p">
                Upload a web design of your choice to begin prototyping.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            className="shadow"
            src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/upload-image-drawers.gif"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1 className="">Create components</h1>
              <p className="p">
                Name your component. Add desired HTML elements. Build them right
                over your design.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            className="shadow"
            src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/component_creation.gif"
          />
        </div>
      </Section>
      <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              <h1>Hierarchy</h1>
              <p className="p">
                Specify hierarchy before or after component creation. Visualize
                the changes in your tree.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            className="shadow"
            src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/HTML-elements-tree-rerender.gif"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1 className="">View live code snippets</h1>
              <p className="p">
                Code snippets are auto generated when components are created.
                Click a component in the display to see its code and HTML
                elements.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            className="shadow"
            src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/snippets-active-component.gif"
          />
        </div>
      </Section>
      <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              <h1>Add Vue routes</h1>
              <p className="p">
                Add new routes and view all components associated with that
                route. Export your project to your file system when finished.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            className="shadow"
            src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/sidebar-components-routes.gif"
          />
        </div>
      </Section>
      <WebApp />
    </div>
  );
};
