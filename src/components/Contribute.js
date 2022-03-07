import React from "react";
import styled from "styled-components";
// styling and functionality of writing, OverVue link below the developer card
const BottomDiv = styled.div`
  @media only screen and (max-width: 800px) {
    h2 {
    }
    h2::after {
      display: none;
    }
    .contribute {
      margin: 0em auto;
    }
  }
  height: 100%;
  justify-content: left;
  margin: 2rem;
  margin-top: 6rem;
  h2 {
    font-weight: 100;
  }
  h2::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1px;
    margin: 1em auto;
    width: 50%;
  }
  i {
    font-size: 1.1em;
    margin: 0em 0em;
    margin-left: 0.5em;
  }
  .contribute {
    width: 6.4rem;
    display: flex;
    margin: 2em auto;
    font-size: 1.1rem;
    padding: 10px;
    color: white;
    background-color: none;
    text-decoration: none;
    border-radius: 0.5rem;
    border: 1px solid white;
    background: none;
    font-family: sans-serif;
    transition: 200ms ease-in;
    &:hover {
      background-color: rgb(255, 255, 255, 0.2);
    }
  }
`;

export const Contribute = () => {
  return (
    <BottomDiv>
      <h2>Want to Contribute?</h2>
      <div>OverVue is open source. Help make Vue prototyping better!</div>
      <a className="contribute" href="https://github.com/open-source-labs/OverVue">
        <p>Github </p> <i className="fab fa-github" />
      </a>
    </BottomDiv>
  );
};
