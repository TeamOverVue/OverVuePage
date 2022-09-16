// styled component for <h2> header
import styled from "styled-components";

// Heading of body
const HeadTwoStyles = styled.div`
  margin: 1em;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  h1 {
    text-align: left;
  }
  h2 {
    font-size: 18px;
    /* text-transform: uppercase; */
    font-weight: 200;
    text-align: left;
  }
  p {
    font-size: 14px;
    text-align: left;
  }
`;

export default HeadTwoStyles;
