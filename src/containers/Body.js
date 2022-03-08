import React from "react";
import HeadTwoStyle from "../assets/HeadTwoStyle";
import styled from "styled-components";
import "../assets/styles.css";

export const Body = () => {
  return (
    <div className="margin-tb-small">
        <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              {/* Containerize the application */}
              <h1>Exciting new updates!</h1>
              <p className="p">
                OverVue is now offering full Vue 3 support
                for your exports, along with the newest versions of Vue 
                Router and Vuex, all while keeping the same features that
                you know and love. 
                <br/>
                On the developer side, all dependencies have been brought up to speed, Webpack has transitioned to Vite to speed up the development process, 
                and the application has been containerized with Docker to bring developers the same experience regardless of operating system. 
              </p>
            </div>
          </HeadTwoStyle>
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              {/* Added 'Get Started' Tutorial */}
              <h1>Import individual components</h1>
              <p className="p">
              Have an existing Vue component you love and want to reuse? Import individual components directly into OverVue to expedite your prototyping process. 
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
              <h1>TypeScript mode</h1>
              <p className="p">
              Toggle to TypeScript mode to generate code snippets and export your project or individual components in TypeScript.
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
        <div className="left">
          <HeadTwoStyle>
            <div>
              {/* Import/Export using TypeScript */}
              <h1>Note Functionality</h1>
              <p className="p">
              Enhance your workflow by adding notes to your components. When you export your project or components into your favorite IDE, notes will be converted into comments within your Vue files.
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
              <h1>Enhanced component tree hierarchy display</h1>
              <p className="p">
              An interactive and real-time tree display of your component hierarchy allows you to easily visualize parent-child component relationships and the Vue Router structure.  
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
      {/* <Section>
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
      </Section> */}
      {/* <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Manage routing</h1>
              <p className="p">
             
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt = "new route"
            className="shadow"
            src="https://media4.giphy.com/media/39kfJfsn1RE5WPaCS9/giphy.gif?cid=790b7611845be82a149a5da9a38c0c36c60b86b6d053ca97&rid=giphy.gif&ct=g"
          />
        </div> 
      </Section> */}
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Refreshed user experience</h1>
              <p className="p">
              Now with a “Get Started” tutorial, a visual queue of your HTML elements, and an overall simplified UI, OveVue is as intuitive as ever. 
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
              <h1>Run on any computer</h1>
              <p className="p">
              OverVue is now containerized with Docker to bring developers the same experience, regardless of your operating system.
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
  margin: 4rem 12rem;
  align-items: flex-start;
  text-align: left;
  color: black;
  max-width: 70vw;
  h1 {
    margin-bottom: 1.5rem;
  }
  p {
    color: #666666 !important;
    font-weight: 300;
  }
  h1::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1.5px;
    margin: .5em 0 .75em;
    width: 15em;
  }

  img {
    margin: 0rem 1.2rem;
  }
`;