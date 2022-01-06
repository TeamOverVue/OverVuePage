import React from "react";
import styled from "styled-components";
import { Button } from "./styled/Button";
import { motion } from "framer-motion";
const svg = require("../logo/overvue-logo.svg");

// functionality and styling for git hub starring, 
// downloading application for windows and mac
// Main title and delay of words appearing
const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 98vh;
  background: rgb(37, 96, 159);
  background: linear-gradient(
    107deg,
    rgba(37, 96, 159, 1) 0%,
    rgba(20, 37, 54, 1) 100%
  );
  align-items: center;
  justify-content: center;
  img {
    height: 8rem;
    margin-right: 1.5rem;
  }
  p {
    margin-right: 0.5em;
    font-size: 1em;
  }
  i {
    font-size: 1.1em;
    margin-left: 0.5em;
  }
  .title {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subtitle {
    font-size: 1.3rem;
    margin: 2rem;
    font-weight: 100;
  }
  #name {
    font-size: 7rem;
    color: whitesmoke;
    margin-right: 0.75em;
    font-weight: 600;
  }
  @media only screen and (max-width: 830px) {
    .title {
      margin:  0px;
    }
    #name {
      font-size: 2.6rem;
    }
  }
  @media only screen and (max-width: 700px){
    .subtitle {
      margin .5em;
    }
    img {
      max-height: 100px;
    }
  }
  @media only screen and (max-width: 400px) {
    margin: 0 auto;
    #name {
      font-size: 3rem;
      margin: 0px;
    }
    .title {
      flex-direction: column;
      margin: 0px;
      justify-content: center;
    }
    p {
      margin-bottom: 1em;
    }
    img {
      margin: 0px;
    }
  }
  #download {
    font-weight: 200;
    display: flex;
    justify-content: center;
  }
  .light-font {
    font-weight: 400;
  }
  #demo {
    margin-right: 0px;
  }
  span {
    padding: 0;
    margin: 0;
  }
`;

export const Header = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const button = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  //const [width, setWidth] = useState();
  return (
    <HeaderStyles>
      <div class="title">
        <div>
          <img alt = "svg" src={svg} />
        </div>
        <div id="name">OverVue</div>
        <div />
      </div>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          delay: 1
        }}
        className="subtitle"
      >
        Prototype driven development.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={button}
        transition={{
          delay: 2,
          x: { type: "inertia", stiffness: 50 },
          default: { duration: 1 }
        }}
      >
        <div class="title">
          <p>Version 5.0 Now Available</p>
        </div>
        
        <Button
          className={"button"}
          href="https://overvue5website.s3.amazonaws.com/OverVue-5.0.0.dmg"
        >
          <div id="download">
            <div>Download for</div> <i class="fab fa-apple" />
          </div>
        </Button>
        <br/>
        <Button
          className={"button"}
          href="https://overvue5website.s3.amazonaws.com/OverVue-win32-x64.zip"
        >
          <div id="download">
            <div>Download for</div> <i class="fab fa-windows" />
          </div>
        </Button>
      </motion.div>
    </HeaderStyles>
  );
};
