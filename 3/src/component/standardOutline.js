import React from "react";
import "./buttons.css";

function StanderedOutline(props) {
  console.log(props);
  return (
    <button
      className="standardOutline"
      style={{
        backgroundColor: `white`,
        border: `2px solid ${props.color}`,
        color: `${props.color}`,
        boxShadow: `0px 3px 3px -2px ${props.background})`
      }}
    >
      {props.text}
    </button>
  );
}

export default StanderedOutline;
