import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
export default function Docs() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Introduction</h2>
        <p>
          {" "}
          OverVue is a prototyping tool that allows developers to dynamically create and visualize a Vue application, implementing a real-time intuitive tree display of component hierarchy and a live-generated code preview. The resulting boilerplate can be exported as a template for further development.{" "}
        </p>
        <h2>Key Features</h2>​
        <ul>
          <li>
            Seamless Development: quickly mock up website layouts and export complete boilerplate code. 
          </li>
          <li>
            Customizable: use popular element+ components, or create custom elements in app.
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
