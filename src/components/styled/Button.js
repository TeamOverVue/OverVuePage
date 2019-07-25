import styled from "styled-components";

export const Button = styled.a`
  font-size: 1.1rem;
  padding: 10px;
  color: white;
  background-color: rbg(0,0,0);
  text-decoration: none;
  border-radius: 0.5rem;
  /* margin: auto; */
  font-family: sans-serif;
  transition: 200ms ease-in;
  &:hover {
    background-color: #3fd1eb;
  }
  margin-top: 1rem;
  display: inline-block;
  border: 0.8px solid white
`;
