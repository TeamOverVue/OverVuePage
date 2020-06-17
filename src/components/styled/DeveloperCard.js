import styled from "styled-components";

const DeveloperCard = styled.div`
  display: inline-block;
  width: 10em;
  height: 10em;
  margin: 3em;
  flex: 0 0 15%;

  .dev-pic {
    margin-bottom: 1em;
    border-radius: 100%;
    width: 10em;
    max-height:10em;
  }
  .dev-name {
    line-height: 1.7em;
    font-weight: 100;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  a:hover {
    color: #3fd1eb;
    transition: 0.3s;
  }
`;

export default DeveloperCard;
