/* content for hero of home page including OverVue banner, download buttons */

import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { motion } from "framer-motion";
import main from "../assets/logo/overvue_trans.png";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const button = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
/** Downloads application for windows and mac
    main title and delay of words appearing  **/
export const Hero = () => (
  <HeaderStyles>
    <div className="title">
      <div>
        <img alt="OverVue logo" id="mainLogo" src={main}></img>
      </div>
    </div>

    <motion.p
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: 1 }}
      className="subtitle"
    >
      Prototype driven development
    </motion.p>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={button}
      transition={{
        delay: 2,
        x: { type: "inertia", stiffness: 50 },
        default: { duration: 1 },
      }}
    >
      <div className="title">
        <p>Introducing OverVue 8.0</p>
      </div>

      <Button
        className={"button"}
        href="https://github.com/open-source-labs/OverVue/releases/download/v7.0.0/OverVue-Linuxv-7.0.0.dmg"
      >
        <div id="download">
          <div>Download for</div> <i className="fab fa-apple" />
        </div>
      </Button>
      <br />
      <Button
        className={"button"}
        href="https://github.com/open-source-labs/OverVue/releases/download/v7.0.0/OverVue-Windows-v7.0.0.zip"
      >
        <div id="download">
          <div>Download for</div> <i className="fab fa-windows" />
        </div>
      </Button>
    </motion.div>
  </HeaderStyles>
);

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: rgb(37, 96, 159);
  background: linear-gradient(
    107deg,
    rgb(52, 73, 94) 0%,
    rgb(1, 4, 31) 70%
  );
  align-items: center;
  justify-content: center;
  img {
    height: 8rem;
    margin-right: 1.5rem;
  }
  p {
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
      align-items: center;
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
