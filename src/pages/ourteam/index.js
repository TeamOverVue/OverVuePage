import React from "react";
import DeveloperCard from "../../styles/DeveloperCard";
import Contribute from "../../components/Contribute";
import { Navbar } from "../../components/Navbar";

import devData from "../../assets/devData";

// /** functionality for loading developer cards components, and the contribute components **/
export default function OurTeam() {
  const devCards = [];

  for (const [name, value] of Object.entries(devData)) {
    devCards.push(
      <DeveloperCard>
        <img src={value.img} alt={name} className="dev-pic" />
        <p className="dev-name">{value["dev-name"]}</p>
        <a href={value["github-link"]}>{value["github-handle"]}</a>
      </DeveloperCard>
    );
  }
  devCards.sort()
  
  return (
    <div className="ourteam">
      <Navbar/>
      <div className="footer">
        <h3 className="team-heading">Meet the team</h3>
        <div className="devCards">
          {devCards}
        </div>
        <Contribute />
      </div>
    </div>
  )
};