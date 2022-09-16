import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/overvue-nav.png";
import "./navbar.css";
 

// OG Nav Bar
export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav__logo" to={"/"}>
        <img src={logo} alt={"logo"} />
        Home
      </Link>
      <div className="nav__actions">
        <Link className="nav__action" to={"/docs"}>
          Docs
        </Link>
        <Link className="nav__action" to={"/ourteam"}>
          Our Team
        </Link>
        <a href="https://github.com/open-source-labs/OverVue">
          <img className='github_logo' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="black github logo"></img>
          2,294
        </a>
      </div>
    </nav>
  );
}
