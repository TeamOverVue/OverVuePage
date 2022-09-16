import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function Tutorial() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>New User Tutorial</h2>
        <p>  {" "}
          OverVue is a prototyping tool that allows developers to dynamically create and visualize a Vue application, implementing a real-time intuitive tree display of component hierarchy and a live-generated code preview. The resulting boilerplate can be exported as a template for further development. The best way to get started is by following our new user tutorial.
           {" "}</p>
           <h3>Quick Start Guide</h3>​
         <ul>
             <li>
          Quickly produce product prototypes with your choice of custom OR element+ library components, snap-to-grid positioning, and component color and sizing
             </li>
             <li>
          Visualize and manipulate component hierarchies and project routing in real time
            </li>
            <li>
          Export custom boilerplate code for Vue 3.0 applications including all the neccessary npm packages, Oauth login of your choice, customized Vue SFC's, and component testing files
            </li>
            <li>
          Share project updates with your team via Slack
            </li>
        </ul>
        <h3>New to Vue 8.0</h3>
        <p>  {" "}
          Vue 8.0 augments prototyping abilities with the addition of element+ components, snap to grid positioning, and exportable color and sizing. In addition, users can now add Oauth boilerplate code for github and google to their exportable code, as well as Vue component testing for elements created in-app.
           {" "}</p>
      </div>
    </DocsLayout>
  );
}