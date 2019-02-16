import React from "react";
import ReactStrap from "reactstrap";

function TextBox({ children }) {
  return (
    <div
      style={{ clear: "both", padding: 10, textAlign: "left" }}
      className="textbox"
    >
      {children}
    </div>
  );
}

export default TextBox;
