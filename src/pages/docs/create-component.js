import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function CreateComponent() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Creating New Components</h2>​
        <ul>
          <li>
            creating new component
          </li>
          <li>
            using element + components
          </li>
          <li>
            adding classes, id, parent/child, 
          </li>
          <li>
            editing components
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
