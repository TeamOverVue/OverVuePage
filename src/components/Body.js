import React from "react";
import HeadTwoStyle from "./styled/HeadTwoStyle";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  margin: auto;
  align-items: flex-start;

  width: 80%;
`;

export const Body = () => {
  return (
    <div>
      <Section>
        <HeadTwoStyle>
          <div>
            <h2>
              Upload an mockup from your filesystem if you'd like. Remove the
              mockup and choose a new one if needed.
            </h2>
          </div>
        </HeadTwoStyle>
        <img src="https://raw.githubusercontent.com/jeisele2/OverVue/master/src/assets/gifs/upload-image-drawers.gif" />
      </Section>
    </div>
  );
};
