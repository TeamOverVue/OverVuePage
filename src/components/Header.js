import React from "react";
import styled from "styled-components";
import { Button } from "./styled/Button";
import GitHubButton from "react-github-btn";
import { motion } from "framer-motion";
const logo = require("../logo/overvue-logo.png");
const svg = require("../logo/overvue-logo.svg");

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background: rgb(37, 96, 159);
  background: linear-gradient(
    107deg,
    rgba(37, 96, 159, 1) 0%,
    rgba(20, 37, 54, 1) 100%
  );
  align-items: center;
  justify-content: center;
  img {
    height: 5rem;
    margin-right: 1rem;
  }
  p {
    margin-right: 1em;
  }
  .title {
    margin-top: 5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .subtitle {
    font-size: 1.3rem;
    margin: 2rem;
    /* margin-bottom: 10rem; */
  }
  #name {
    font-size: 5rem;
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
  return (
    <HeaderStyles>
      <div class="title">
        <div>
          <img src={svg} />
        </div>
        <div id="name">OverVue</div>
        <div />
      </div>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          delay: 0.5
        }}
        className="subtitle"
      >
        All in one prototyping tool for Vue developers
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={button}
        transition={{
          delay: 1,
          x: { type: "inertia", stiffness: 50 },
          default: { duration: 1 }
        }}
      >
        <div class="title">
          <p>Star us on GitHub!</p>
          <GitHubButton
            className={"githubbtn"}
            href="https://github.com/TeamOverVue/OverVue"
            data-icon="octicon-star"
            aria-label="Star ntkme/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
        </div>
        <Button
          className={"button"}
          href="https://overvue-app.s3-us-west-2.amazonaws.com/OverVue-0.0.1.dmg"
        >
          <div>Download for MacOS</div>
        </Button>
      </motion.div>
    </HeaderStyles>
  );
};
