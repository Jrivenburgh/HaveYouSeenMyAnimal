import React from "react";
import "./jt.css";
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 'auto', clear: "both", textAlign: "center",   opacity: 1 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
