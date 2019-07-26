import React from "react";
import styled from "styled-components";

const BottomDiv = styled.div`
  background: black;
  height: 25vh;
  justify-content: flex-start;
  padding: 2rem;
  margin: 0 auto;
  /* text-align: left; */
`;

export const Contribute = () => {
  return (
    <BottomDiv>
      <div>Want to Contribute?</div>
      <div>OverVue is open source.</div>
      <div>Build with us.</div>
    </BottomDiv>
  );
};
