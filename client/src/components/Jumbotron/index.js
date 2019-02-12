<<<<<<< HEAD
export { default } from "./Jumbotron";
=======
import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
>>>>>>> 0be1e2a7559e37e66ed108012d43c5849b5c41ab
