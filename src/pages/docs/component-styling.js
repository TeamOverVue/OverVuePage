import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function ComponentStyling() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Component Styling</h2>​
        <ul>
          <li>
            positioning/snap to grid
          </li>
          <li>
            color updates
          </li>
          <li>
            size updates
          </li>
          <li>
            Making use of the popular Vue component library element+
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}