import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
export default function Docs() {
  return (
    <DocsLayout>
    <div className="docs__content">
      <h2>Introduction</h2>
      <p>  {" "}
        OverVue is a developer tool that allows you to seemlessly create and visualize a Vue application with expansive prototyping, a real-time, intuitive tree display of routing and component hierarchy, and live-generated, exportable boilerplate code. The best way to get started is by following our new user tutorial.
         {" "}</p>
         <h3>Key Features</h3>​
       <ul>
           <li>
          Quickly produce product prototypes with your choice of custom or element+ library components. 
           </li>
           <li>
          Customize your prototype with snap-to-grid positioning and component color and sizing.
           </li>
           <li>
          Visualize and manipulate project routing, component hierarchies, and code snippets in real time.
          </li>
          <li>
          Export custom boilerplate code for Vue 3.0 applications including neccessary npm packages, Oauth login of your choice, customized Vue SFC's, and component testing files.
          </li>
          <li>
          Share project updates with your team via Slack.
          </li>
      </ul>
      <h3>New to Vue 8.0</h3>
      <p>  {" "}
        Vue 8.0 augments prototyping abilities with the addition of element+ components, snap to grid positioning, and exportable color and sizing. In addition, users can now add Oauth boilerplate code and component testing files for their exportable projects.
         {" "}</p>
    </div>
  </DocsLayout>
  );
}
