import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function SaveAndExport() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Save and Export Your Projects</h2>​
        <ul>
          <li>
            Saving and importing json object of Overvue instance
          </li>
          <li>
            Saving and Exporting full boilerplate code
          </li>
          <li>
            Saving and Exporting individual component code
          </li>
          <li>
            Opening and initializing exported code
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
