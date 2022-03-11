// styled component for <h2> header
import styled from "styled-components";

// Heading of body
const HeadTwoStyles = styled.div`
  margin: 1em;

  div {
    margin-top: -.35em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  h2 {
    font-size: 18px;
    /* text-transform: uppercase; */
    font-weight: 200;
  }
  p {
    font-size: 14px;
  }
`;

export default HeadTwoStyles;
