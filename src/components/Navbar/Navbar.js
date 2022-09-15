import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/overvue-nav.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav__logo" to={"/"}>
        <img src={logo} alt={"logo"} />
      </Link>
      <div className="nav__actions">
        <Link className="nav__action" to={"/docs"}>
          Docs
        </Link>
        <Link className="nav__action" to={"/examples"}>
          Examples
        </Link>
        <a href="https://github.com/open-source-labs/OverVue">
          <img src="/Users/emma/Desktop/Codesmith/OverVueWebsite/OverVuePage/src/assets/logo/GitHub-Mark-120px-plus.png" alt="black github logo"></img>
        </a>
      </div>
    </nav>
  );
}
