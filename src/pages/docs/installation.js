import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function Installation() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Introduction</h2>
        <p>
          {" "}
          OverVue is a prototyping tool that allows developers to dynamically create and visualize a Vue application, implementing a real-time intuitive tree display of component hierarchy and a live-generated code preview. The resulting boilerplate can be exported as a template for further development.
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