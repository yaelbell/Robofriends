import React from "react";
import "./scroll.css";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", height: "800px" }}>{props.children}</div>
  );
};

export default Scroll;
