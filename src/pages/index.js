import React from "react";
import { Hero, Body } from "../containers";
import { Navbar } from "../components";
import "../styles/styles.css";

export default function Homepage() {
  return (
    <div id="App">
      <Navbar />
      <Hero />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}
