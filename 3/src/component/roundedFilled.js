import React from "react";
import "./buttons.css";

function RoundedFilled(props) {
  console.log(props);
  return (
    <button
      className="roundedFilled"
      style={{
        backgroundColor: `${props.background}`,
        color: `${props.color}`,
      }}
    >
      {props.text}
    </button>
  );
}

export default RoundedFilled;
