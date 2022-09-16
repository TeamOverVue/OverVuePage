// react layout for docs page including persistant top navbar and sidebar

import React from "react";
import { links } from "../data/sidebar-links";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "./docs-layout.css";

export default function Layout({ children }) {
  return (
    <div className="docs__layout">
      <Navbar />
      <div className="docs__body">
        <Sidebar links={links} />
        {children}
      </div>
    </div>
  );
}
