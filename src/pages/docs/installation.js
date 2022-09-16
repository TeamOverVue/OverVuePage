import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function Installation() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Installation</h2>
        <p>
          {" "}
          OverVue is compatible with both MacOS and WSL. Quickly install and set up using the quickstart guide for your operating system below.
           {" "}
        </p>
        <h2>Installation Instructions</h2>​
        <ul>
          <li>
            1. Download the desktop App. 
          </li>
          <li>
            2. Install Dependencies
          </li>
          <li>
            3. Run electron app in dev mode (nb. Vue Devtools will launch automatically)
          </li>
          <li>
            4. Run build
          </li>
        </ul>
        <p>
          {" "}
        </p>
      </div>
    </DocsLayout>
  );
}