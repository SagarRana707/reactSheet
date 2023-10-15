import React from "react";
import "./buttons.css";

function StanderedFilled(props) {
  console.log(props);
  return (
    <button
      className="standardFill"
      style={{
        backgroundColor: `${props.background}`,
        color: `${props.color}`,
        boxShadow: `0px 3px 3px -2px rgba(${props.background})`,
      }}
    >
      {props.text}
    </button>
  );
}

export default StanderedFilled;
