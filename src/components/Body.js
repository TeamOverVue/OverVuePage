import React from "react";
import HeadTwoStyle from "./styled/HeadTwoStyle";
import { WebApp } from "./WebApp";
import styled from "styled-components";
import "../App.css";

// styling and functionality for overall content
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
            alt = "Upload img"
            className="shadow"
            src="https://media.giphy.com/media/NE2BtP2GuwURmn7nz0/giphy.gif?cid=790b7611e7e7d93fbe81bed53e95c796cf1ad7450fd00ccc&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Create components</h1>
              <p className="p">
                Name your component. Add desired HTML elements. Build them right
                over your design.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "right click add"
            className="shadow"
            src="https://media.giphy.com/media/WGgKFB5B2sos5dHWSU/giphy.gif?cid=790b7611a0d0b76600f60b69ee668ab96058d786cc91ec12&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              <h1>Hierarchy</h1>
              <p className="p">
                Specify parent and child hierarchy before or after component creation. Visualize
                the changes in your tree.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "hierarchy"
            className="shadow"
            src="https://media.giphy.com/media/aqtFC1LMXzqE4WvhkC/giphy.gif?cid=790b7611ac4c453ca4811d95ee405fead0257c185b0352fa&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Manage Vuex + Add Props to Components</h1>
              <p className="p">
                Quickly map and add State, Actions, and Props throughout the entire application.  
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "adding props and mapping Vuex"
            className="shadow"
            src="https://media.giphy.com/media/JucFNDgSDWwoKOpgH9/giphy.gif?cid=790b7611e83f35560ba4bbaf54aff733c03bea568dd3d92c&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              <h1>View live code snippets</h1>
              <p className="p">
                Code snippets are auto generated when components are created.
                Click a component in the display to see its code, HTML elements, props, state, and actions.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "code snippet"
            className="shadow"
            src="https://raw.githubusercontent.com/open-source-labs/OverVue/master/src/assets/readme/live_code_snippet.gif"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Add Vue routes</h1>
              <p className="p">
                Add new routes and view all components associated with that
                route.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "new route"
            className="shadow"
            src="https://raw.githubusercontent.com//open-source-labs/OverVue/master/src/assets/readme/add_new_route.gif"
          />
        </div>
      </Section>
      <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              <h1>Edit Component Functionality</h1>
              <p className="p">
                Click on a component and choose the features you wish to edit.
                View all of your changes lives in the Component Details Tab. 
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "edit component"
            className="shadow"
            src="https://media.giphy.com/media/2lzk8OeNvdq8H13SUc/giphy.gif?cid=790b7611b235a350238776995e9dc73e03ff29b71e02744d&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div>
        <HeadTwoStyle>
        <h1>Plus some other amazing features: </h1>
        <br/>
          <ul>
            <li><h2>Update Component Layer</h2></li>
            <li><h2>Open, Save, and Export your Project</h2></li>
          </ul>
        </HeadTwoStyle>
        </div>
      </Section>
      <WebApp />
    </div>
  );
};
