import React from "react";
import HeadTwoStyle from "../assets/HeadTwoStyle";
import styled from "styled-components";

export const Body = () => {
  return (
    <div className="margin-tb-small">
      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Create Components</h1>
              <p className="p">
                Start off your project by creating and naming your first component. Interact with it in the CSS Container.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Add html element Gif"
            className="shadow"
            src="https://media.giphy.com/media/MHqQTb5Vdtewlra4pG/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Add and change HTML Elements</h1>
              <p className="p">
                Add HTML elements inside your component. You can now modify the specifications of your prototype.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Add html element Gif"
            className="shadow"
            src="https://media.giphy.com/media/YyPpNuH86r25JZNd46/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Add attributes to components </h1>
              <p className="p">
                Add a class and/or an ID attribute to the component to tailor it to your needs.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Add component attribute Gif"
            className="shadow"
            src="https://media.giphy.com/media/3eKBo9Qfi16mVdGIz4/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Add Notes</h1>
              <p className="p">
                You can add personalized messages to help you keep track of your components.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Notes Gif"
            className="shadow"
            src="https://media.giphy.com/media/1ttTOYNOTYBSOoWtG1/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Add Two-Way Binding or other Attributes</h1>
              <p className="p">
                Options to add attributes to add specific functionality such as two way binding and class is now available.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Add html element attribute Gif"
            className="shadow"
            src="https://media.giphy.com/media/aXMkIStyTE0jkNlRtO/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Style HTML Elements</h1>
              <p className="p">
                Stylize HTML elements to visualize your product. Adjustable style options to include height, width, color, and size.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Style html elements Gif"
            className="shadow"
            src="https://media.giphy.com/media/Q0DYBMnuMLXoo5buvW/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Child Components</h1>
              <p className="p">
                Child components can be easily incorporated into the code snippet. Child components will be available to be added from the HTML element list.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Gif of adding child components"
            className="shadow"
            src="https://media.giphy.com/media/3j42CzkMDEpEFFbJZT/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Visualize Prototype</h1>
              <p className="p">
                Note the project's high level overview by visiting the Project Tree tab to observe the component’s hierarchy.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Gif of visualizing the prototype project tree"
            className="shadow"
            src="https://media.giphy.com/media/vncIbdxJ36uU7a1bk3/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Code Snippet</h1>
              <p className="p">
                The boilerplate code is visible at every step of prototyping and dynamically updates according to new edits.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Gif of live rendering of code snippet"
            className="shadow"
            src="https://media.giphy.com/media/JLCUOmKfQpOmdWUf4l/giphy.gif"
          />
        </div>
      </Section>

      <Section>
        <div className="left">
          <HeadTwoStyle>
            <div>
              <h1>Export boilerplate</h1>
              <p className="p">
                Export the prototype's code in a lightweight boilerplate and develop the product further in an IDE.
              </p>
            </div>
          </HeadTwoStyle>
          <img
            alt="Gif of exporting the prototype's boilerplate"
            className="shadow"
            src="https://media.giphy.com/media/v8IbYTVrgFboHgpxBB/giphy.gif"
          />
        </div>
      </Section>
    </div>
  )
};

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
   
  }
  img {
    margin: 0rem 1.2rem;
    width: 630px;
    max-width: 90vw;
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