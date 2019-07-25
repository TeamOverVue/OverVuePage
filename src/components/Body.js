import React from "react";
import "../App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import HeadTwoStyle from "./styled/HeadTwoStyle";

const Section = styled.div`
  display: flex;
  margin: 8rem 12rem;
  align-items: flex-start;
  text-align: left;
  /* justify-content: center; */
  /* max-width: 100%; */
  /* height: auto; */
  color: black;
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
      <motion.div initial="hidden" animate="visible" variants={section}>
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
      </motion.div>
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
