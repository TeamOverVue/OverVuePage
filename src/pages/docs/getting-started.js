import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function GettingStarted() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Introduction</h2>
        <p>
          {" "}
          React Flow is a library for building node-based applications. These
          can be simple static diagrams or complex editors. You can implement
          custom node types and edge types and it comes with components like a
          mini-map and graph controls. The best way to start is to follow the
          getting started guide or check out the examples.{" "}
        </p>
        <h2>Key Features</h2>​
        <ul>
          <li>
            Easy to use: Seamless zooming & panning behaviour and single and
            multi-selections of nodes and edges
          </li>
          <li>
            Customizable: Different node and edge types and support for custom
            nodes with multiple handles and custom edges
          </li>
          <li>
            Fast rendering: Only nodes that have changed are re-rendered and
            only those that are in the viewport are displayed
          </li>
          <li>
            Hooks and Utils: Hooks for handling nodes, edges and the viewport
            and graph util functions
          </li>
          <li>Plugin Components: Background, MiniMap and Controls</li>
          <li>
            {" "}
            Reliable: Written in Typescript and tested with cypress OverVue 8.0
            We are working full time on React Flow and related projects.
          </li>
        </ul>
        <p>
          {" "}
          If you are using React Flow commercially, please consider to do a
          monthly pro subscription. By subscribing to React Flow Pro you are
          helping us to secure the further maintenance and development of the
          library.
        </p>
      </div>
    </DocsLayout>
  );
}