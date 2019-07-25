import React from "react";
import HeadTwoStyle from "./styled/HeadTwoStyle";
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
            <h1>Styled components</h1>
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
            <h1>Styled components</h1>
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
            <h1>Styled components</h1>
            <h2>
              To add a new component, type its name in the component name box
              and select any HTML elements that should be rendered by that
              component. Select a parent component for the new component if
              needed. After adding, you can move and resize the component in the
              display.
            </h2>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/component_creation.gif" />
      </Section>
      <Section>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/component_creation.gif" />
        <HeadTwoStyle>
          <div>
            <h1>Styled components</h1>
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
            <h1>Styled components</h1>
            <h2>
              To add a new component, type its name in the component name box
              and select any HTML elements that should be rendered by that
              component. Select a parent component for the new component if
              needed. After adding, you can move and resize the component in the
              display.
            </h2>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/component_creation.gif" />
      </Section>
    </div>
  );
};
