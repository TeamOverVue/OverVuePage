import React from "react";
import HeadTwoStyle from "./styled/HeadTwoStyle";
import { WebApp } from './WebApp';
import styled from "styled-components";
import "../App.css";

const Section = styled.div`
  display: flex;
  margin: 10rem auto;
  align-items: flex-start;
  text-align: left;
  /* justify-content: center; */
  width: 80%;
  color: black;
`;

export const Body = () => {
  return (
    <div className="margin-tb">
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Prototype based on UI design</h1>
            <h2>
              Upload an mockup from your filesystem if you'd like. Remove the
              mockup and choose a new one if needed.
            </h2>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/upload-image-drawers.gif" />
      </Section>
      <Section>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/component_creation.gif" />
        <HeadTwoStyle>
          <div>
            <h1>Create components</h1>
            <h2>
              To add a new component, type its name in the component name box
              and select any HTML elements that should be rendered by that
              component. Select a parent component for the new component if
              needed. After adding, you can move and resize the component in the
              display.
            </h2>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Establish parent-child hierarchy</h1>
            <h2>
            You can also add children to components by right-clicking the component to add children to, and you can see the tree rerender as you create new components or change the hierarchy. 
            </h2>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/HTML-elements-tree-rerender.gif" />
      </Section>
      <Section>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/snippets-active-component.gif" />
        <HeadTwoStyle>
          <div>
            <h1>View live code snippets</h1>
            <h2>
            The dashboard shows info about each component (code snippets and HTML elements). Click a component in the display to see its properties.
            </h2>
          </div>
        </HeadTwoStyle>
      </Section>
      <Section>
        <HeadTwoStyle>
          <div>
            <h1>Add Vue routes</h1>
            <h2>
            You can add new routes and view all components and routes in the sidebar. When finished creating, you can export to a file location of your choice!
            </h2>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/sidebar-components-routes.gif" />
      </Section>
      <WebApp />
    </div>
  );
};
