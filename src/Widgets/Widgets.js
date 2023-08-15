import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://react.dev/"
        frameborder="0"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
      ></iframe>
    </div>
  );
}

export default Widgets;
