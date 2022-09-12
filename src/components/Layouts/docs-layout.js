import React from "react";
import { links } from "../../data/sidebar-links";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
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