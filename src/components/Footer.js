import React from "react";
import DeveloperCard from "./styled/DeveloperCard";
import deanfchung from "../assets/dev-pics/dean-chung.png";
import deano from "../assets/dev-pics/deano.jpg";
import drew from "../assets/dev-pics/drew.jpg";
import joseph from "../assets/dev-pics/joseph.jpg";
import alex from "../assets/dev-pics/alex.PNG";
import joju from "../assets/dev-pics/joju.jpg";
import keriann from "../assets/dev-pics/keri_overvue.png"
import allison from "../assets/dev-pics/allison1.jpg"
import faraz from "../assets/dev-pics/FarazPic.png"
import sean from "../assets/dev-pics/SeanPic.png"
import nicholas from "../assets/dev-pics/NicholasPic.jpeg"
import terry from "../assets/dev-pics/TerryPic.jpg"
import { Contribute } from "./Contribute";

// functionality for loading developer cards components, and the contribute components 
export const Footer = () => {
  return (
    <div className="footer">
      <h3 className="team-heading">Meet the team.</h3>
      <div className ="devCards">
        <DeveloperCard>
          <img src={deano} alt = "deano" className="dev-pic" />
          <p className="dev-name">Dean Ohashi</p>
          <a href="https://github.com/dnohashi">@dnohashi</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={deanfchung} alt= "deanf" className="dev-pic" />
          <p className="dev-name">Dean Chung</p>
          <a href="https://github.com/deanfchung">@deanfchung</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={drew} alt = "drew" className="dev-pic" />
          <p className="dev-name">Drew Nguyen</p>
          <a href="https://github.com/drewngyen">@drewngyen</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={joseph} alt = "joseph" className="dev-pic" />
          <p className="dev-name">Joseph Eisele</p>
          <a href="https://github.com/jeisele2">@jeisele</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={alex} alt = "alex" className="dev-pic" />
          <p className="dev-name">Alexander Havas</p>
          <a href="https://github.com/LOLDragoon">@LOLDragoon</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={keriann} alt = "keriann" className="dev-pic" />
          <p className="dev-name">Keriann Lin</p>
          <a href="https://github.com/keliphan">@keliphan</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={joju} alt = "joju" className="dev-pic" />
          <p className="dev-name">Joju Olaode</p>
          <a href="https://github.com/JojuOlaode">@JojuOlaode</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={allison} alt = "allison" className="dev-pic" />
          <p className="dev-name">Allison Pratt</p>
          <a href="https://github.com/allisons11">@allisons11</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={faraz} alt = "faraz" className="dev-pic" />
          <p className="dev-name">Faraz Moallemi</p>
          <a href="https://github.com/farazmoallemi">@farazmoallemi</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={sean} alt = "sean" className="dev-pic" />
          <p className="dev-name">Sean Grace</p>
          <a href="https://github.com/ziggrace">@ziggrace</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={terry} alt = "terry" className="dev-pic" />
          <p className="dev-name">Terry L. Tilley</p>
          <a href="https://github.com/codeByCandlelight">@codeByCandlelight</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={nicholas} alt = "nicholas" className="dev-pic" />
          <p className="dev-name">Nicholas Schillaci</p>
          <a href="https://github.com/Schillaci767">@Schillaci767</a>
        </DeveloperCard>
      </div>
      <Contribute/>
    </div>
  );
};
