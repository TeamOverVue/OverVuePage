import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function CanvasCustomization() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Canvas Customization</h2>​
        <ul>
          <li>
            list option
          </li>
          <li>
            Visualize component hierarchies in real time
          </li>
          <li>
            Quickly produce product prototypes with snap-to-grid positioning
          </li>
          <li>
            Make use of the popular Vue component library element+
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
