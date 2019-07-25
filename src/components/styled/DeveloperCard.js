import styled from "styled-components";

const DeveloperCard = styled.div`
  display: inline-block;
  background-color: white;
  width: 10em;
  height: 10em;
  margin: 3em;

  .dev-pic {
    margin-bottom: 1em;
    border-radius: 100%;
    width: 10em;
  }
  .dev-name {
    line-height: 1.7em;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #3fd1eb;
    transition: .3s;
  }
`;

export default DeveloperCard;
