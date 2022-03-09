import React from "react";
import HeadTwoStyle from "../assets/HeadTwoStyle";
import styled from "styled-components";
import "../assets/styles.css";

<<<<<<< HEAD
export const Body = () => {
  return (
    <div className="margin-tb-small">
        <Section>
        <div className="right">
          <HeadTwoStyle>
            <div>
              {/* Containerize the application */}
              <h1>Exciting new updates!</h1>
              <p className="p">
                The OverVue that you know and love is now even better. We acknowleged the lack of support of OverVue for the linux community and for V6.0 we containerized the application
                to ensure the same great experience regardless of the OS of choice while maintaining the same features and functionality of the previous versions of OverVue. Additional to containerizing, 
                we also felt the need to add an Import feature to allow users the ease of continuing their work on existing Vue apps. While Vue 3 supported TypeScript by default, OverVue didn't. We took
                it upon ourselves to maximize the benefits of OverVue using Vue 3 and added TypeScript toggle to switch between JavaScript and TypeScript when exporting. Speaking of exporting, for V6.0
                we added the ability to export components in addition to being able to export full projects to allow the user flexibility while developing. The latest version of OverVue was well put
                together but we felt a refresh in UIUX was needed to ease the navigation of the application, as a result, we overhauled the user interface to a more pleasant and simple design. 
                The last version of OverVue had slight hiccups in the tree visualization feature. For V6.0, the tree is back up and running better than ever with an all new interactive feature and clean layout.
                Last but not least of the new features, we felt the need to add the ability for developers to be able to write comments in their components for an easier reference when the component/project is exported.
                <br/>
                <br/>
                On the developer side, all dependencies have been brought up to speed, Webpack has transitioned to Vite to speed up the development process, 
                and the application has been containerized with Docker to bring developers the same experience regardless of operating system. 
              </p>
            </div>
          </HeadTwoStyle>
        </div>
      </Section>
=======
export const Body = () => (
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
>>>>>>> 168fac7757317cfdbb876f769a85c6f7dfe36633

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
    font-size: 1.1rem;
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
`;