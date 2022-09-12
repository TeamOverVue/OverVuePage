import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/overvue-nav.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt={"logo"} />
      </div>
      <div className="nav__actions">
        <Link className="nav__action" to={"/docs"}>
          Docs
        </Link>
        <Link className="nav__action" to={"/examples"}>
          Examples
        </Link>
        <Link className="nav__github-stars">GITHUB STARS</Link>
      </div>
    </nav>
  );
}
