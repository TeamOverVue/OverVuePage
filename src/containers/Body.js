import React from "react";
import HeadTwoStyle from "../assets/HeadTwoStyle";
import styled from "styled-components";
import "../assets/styles.css";

export const Body = () => {
  return (
    <div className="margin-tb-small">
        <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              {/* Containerize the application */}
              <h1>Full Vue 3 compatibility</h1>
              <p className="p">
                OverVue is now offering full Vue 3 support
                for your exports, along with the newest versions of Vue 
                Router and Vuex, all while keeping the same features that
                you know and love.
                You can still save and open OverVue projects, 
                and you can still export IDE-compatible component files. 
                Because exports are now in Vue 3, you'll enjoy built-in TypeScript support and easy access to 
                new functionality, such as the Composition API and transports.
                On the developer side, application source code and dependencies have also been upgraded
                to offer Vue 3 support, ensuring it will be valuable to the community for years to come.
              </p>
            </div>
          </HeadTwoStyle>
        </div>
      </Section>

      <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              {/* Added 'Get Started' Tutorial */}
              <h1>Prototype based on UI design</h1>
              <p className="p">
                Upload a web design of your choice to begin prototyping. 
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "Upload img"
            className="shadow"
            src="https://media1.giphy.com/media/2A2N1aUzPwzprjrFTB/giphy.gif?cid=790b7611c23aa7ebfb1f47f13e43d0a953368200facbb030&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              {/* Component Tree */}
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
            src="https://media0.giphy.com/media/s3RfuZ5UaiR3MmTLDT/giphy.gif?cid=790b76113318403b40a10d875dd6ba7700ee2746651281ef&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              {/* Import/Export using TypeScript */}
              <h1>Hierarchy</h1>
              <p className="p">
                Specify parent and child hierarchy before or after component creation. Visualize
                the changes in your tree. Copy and paste any component with Ctrl/Cmd C & V hotkeys.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "hierarchy"
            className="shadow"
            src="https://media1.giphy.com/media/sktDfjcd0bVlGfjULl/giphy.gif?cid=790b7611b242fd13f29944e21ab4b193486b7839abe03086&rid=giphy.gif&ct=g"
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
            src="https://media3.giphy.com/media/vT8OKdG83pvTTB2lcl/giphy.gif?cid=790b76119ea5ee6ba2a8472e2f77793a0edd0eaf99dc3114&rid=giphy.gif&ct=g"
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
            src="https://media4.giphy.com/media/Hf00cmTQbseRr8dqPB/giphy.gif?cid=790b7611ce2368f589e1a86edca87551c5d2dfce510f8df3&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Manage routing</h1>
              <p className="p">
                Create, edit, and assign routes to components with ease.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "new route"
            className="shadow"
            src="https://media4.giphy.com/media/39kfJfsn1RE5WPaCS9/giphy.gif?cid=790b7611845be82a149a5da9a38c0c36c60b86b6d053ca97&rid=giphy.gif&ct=g"
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
                View all of your changes live. 
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "edit component"
            className="shadow"
            src="https://media0.giphy.com/media/GpzlfwdIzFmWZXpT1I/giphy.gif?cid=790b76112d354056726d7e5cbc3702904b0158516eb9919e&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Connect to Slack</h1>
              <p className="p">
                Log in to your Slack workspace and notify your team when changes are saved.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "slack login"
            className="shadow"
            src="https://media1.giphy.com/media/zAJ5sINDM15zpyzUQC/giphy.gif?cid=790b761183740797f750db09fc5efdde0ca1106b224daf59&rid=giphy.gif&ct=g"
          />
        </div>
      </Section>

    </div>
  );
};

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