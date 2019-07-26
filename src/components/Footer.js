import React from "react";
import DeveloperCard from "./styled/DeveloperCard";
import deanfchung from "../assets/dev-pics/dean-chung.png";
import deano from "../assets/dev-pics/deano.jpg";
import drew from "../assets/dev-pics/drew.jpg";
import joseph from "../assets/dev-pics/joseph.jpg";
export const Footer = () => {
  return (
    <div className="footer">
      <h3 className="team-heading">Meet the team.</h3>
      <DeveloperCard>
        <img src={deano} className="dev-pic" />
        <p className="dev-name">Dean Ohashi</p>
        <a href="https://github.com/dnohashi">@dnohashi</a>
      </DeveloperCard>
      <DeveloperCard>
        <img src={deanfchung} className="dev-pic" />
        <p className="dev-name">Dean Chung</p>
        <a href="https://github.com/deanfchung">@deanfchung</a>
      </DeveloperCard>
      <DeveloperCard>
        <img src={drew} className="dev-pic" />
        <p className="dev-name">Drew Nguyen</p>
        <a href="https://github.com/drewngyen">@drewngyen</a>
      </DeveloperCard>
      <DeveloperCard>
        <img src={joseph} className="dev-pic" />
        <p className="dev-name">Joseph Eisele</p>
        <a href="https://github.com/jeisele2">@jeisele</a>
      </DeveloperCard>
    </div>
  );
};
