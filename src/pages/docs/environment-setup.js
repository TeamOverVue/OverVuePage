import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function EnvironmentSetup() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Setting Up Your OverVue Environment</h2>​
        <ul>
          <li>
            Setting grid density
          </li>
          <li>
            connecting to slack
          </li>
          <li>
            selecting Oauth and typescript options
          </li>
          <li>
            anything else you wanna add
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
