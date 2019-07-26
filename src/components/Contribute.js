import React from "react";
import styled from "styled-components";

const BottomDiv = styled.div`
  background: black;
  height: 15vh;
  justify-content: flex-start;
  align-items: r;
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
