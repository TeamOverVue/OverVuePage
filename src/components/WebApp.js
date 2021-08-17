import React from "react";
import "../App.css";

// loading Demo
export const WebApp = () => {
  return (
    <div className=" black" id="webapp">
      <h1>Demo <span role="img" aria-label="point">👇</span></h1>
      <div class="m-1">
        <iframe
          title ="iframe"
          className="iframe"
          src="https://d3jjiewd1t2yhm.cloudfront.net"
        />
      </div>
    </div>
  );
};
