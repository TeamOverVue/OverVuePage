import React from "react";
import { Header } from "./containers/Header";
import { Body } from "./containers/Body";
import { Footer } from "./containers/Footer";
import "./assets/styles.css";

function App() {
  return (
    <div id="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;