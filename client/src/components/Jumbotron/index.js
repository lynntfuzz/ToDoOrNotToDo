import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 250, clear: "both", paddingTop: 10, textAlign: "center" }}
      className="jumbotron" 
    >
      {children}
    </div>
  );
}

export default Jumbotron;
