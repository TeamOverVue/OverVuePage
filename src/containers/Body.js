import React from "react";
import HeadTwoStyle from "../assets/HeadTwoStyle";
import styled from "styled-components";
import "../assets/styles.css";
import logo from "../assets/logo/docker-logo.png"
export const Body = () => {
  return (
    <div className="margin-tb-small">
        <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              
              <h1>Exciting new updates!</h1>
              <p className="p">
               The OverVue that you know and love is now better than ever. With a sleek new design and a refreshed user experience, OverVue 6.0 simplifies navigation and offers a “Getting Started” tutorial to help expedite your prototyping workflow. 
              
              OverVue is now up to date with Vue 3’s built-in TypeScript support. Your projects can easily be exported with TypeScript-specific syntax and dependencies so you can quickly start developing your next app with the benefits of static typing. 
              
              With OverVue 6.0, project exports will now build with Vite instead of Webpack, offering several advantages including faster compilation times, fewer dependencies, and better Vue support without the need for additional libraries. 
              
              Other improvements include the ability to import or export individual Vue components, an enhanced component tree diagram with added interactivity, and the ability to add notes to components that export as comments in your boilerplate code. 
              
              And that’s not all – we acknowledged the lack of support for the Linux community.  With V6.0, we’re offering a containerized version of the application with Docker to ensure the same great experience regardless of OS.

              </p>
            </div>
          </HeadTwoStyle>
        </div>
      </Section>

    <Section>
      <div className="left">
        <HeadTwoStyle>
          <div>

            <h1>Import individual components</h1>
            <p className="p">
            Have an existing Vue component you love and want to reuse? Import individual components directly into OverVue to expedite your prototyping process. 
            </p>
          </div>
        </HeadTwoStyle>
        <img
          alt = "Import Component Gif"
          className="shadow"
          src="https://media.giphy.com/media/norazcjPHnjVjKKm8R/giphy.gif"
        />
      </div>
    </Section>
    <Section>
      <div className="left">
        <HeadTwoStyle>
          <div>
            
            <h1>TypeScript mode</h1>
            <p className="p">
            Toggle to TypeScript mode to generate code snippets and export your project or individual components in TypeScript.
            </p>
          </div>
        </HeadTwoStyle>
        <img
          alt = "TypeScript Mode Gif"
          className="shadow"
          src="https://media.giphy.com/media/TCudPSfaW2Ln6FQ6EX/giphy.gif"
        />
      </div>
    </Section>
    <Section>
      <div className="left">
        <HeadTwoStyle>
          <div>
           
            <h1>Note Functionality</h1>
            <p className="p">
            Enhance your workflow by adding notes to your components. When you export your project or components into your favorite IDE, notes will be converted into comments within your Vue files.
            </p>
          </div>
        </HeadTwoStyle>
        <img
          alt = "Note Functionality Gif"
          className="shadow"
          src="https://media.giphy.com/media/6pmSovhIVBIrfOo1Va/giphy.gif"
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
          alt = "Components Tree Gif"
          className="shadow"
          src="https://media.giphy.com/media/DJZDw5YQMQRxPB9QdB/giphy.gif"
        />
      </div>
    </Section>
       
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
          alt = "UI Refresh Gif"
          className="shadow"
          src="https://media.giphy.com/media/VZTqcpFQdpW4uWJvzw/giphy.gif"
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
          alt = "Docker Logo"
          className="shadow docker-img"
          src={logo}
 />
      </div>
    </Section>
  </div>
)};

const Section = styled.div`
  /* mobile */
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
    font-size: 1.5rem;
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
  
  @media only screen and (max-width: 1400px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    text-align: center;
    margin: 2rem 12rem;

    * {
      align-self: stretch;
      max-width: 800px;
    }

    .left {
      flex-direction: column;
    }
    .right {
      flex-direction: column;
    }
    h1::after {
      align-self: center;
      margin: 1em auto;
    }
  }

`