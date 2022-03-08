import styled from "styled-components";
// styling for the developer card in footer
const DeveloperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 8em;
  height: 8e,;
  margin: 2.25em;

  .dev-pic {
    margin-bottom: 1em;
    border-radius: 100%;
    width: 8em;
    height: 8em;
  }
  .dev-name {
    color: #dde;
    line-height: 1.7em;
    font-weight: 500;
  }
  a {
    color: #dde;
    text-decoration: none;
    font-size: .9em;
    font-weight: 500;
    margin-bottom: -2.25em;
  }
  a:hover {
    color: #eef;
    transition: 0.3s;
  }
`;

export default DeveloperCard;
