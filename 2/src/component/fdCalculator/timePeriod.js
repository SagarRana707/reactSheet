import React, { Fragment } from "react";
import "./timePeriod.css";

const TimePeriod = (props) => {
  function yearsChange(e) {
    const currentYears = parseInt(e.target.value);
    props.sett(currentYears);
      props.calculatefd();

  }

  return (
    <Fragment>
      <div className="timePeriod">
        <div style={{ display: "flex" }}>
          <p className="">Rate of interest (p.a)</p>{" "}
          <p style={{ color: "#03b789", fontWeight: "bold" }}>Years</p>
        </div>
        <div className="time">
          <input
            type="number"
            id="years"
            name="Years"
            min="1"
            max="25"
            step="1"
            value={props.t}
            onChange={yearsChange}
          />
        </div>
      </div>
      <input
        type="range"
        id="yearRange"
        name="yearrange"
        min="1"
        max="25"
        step="1"
        value={props.t}
        onChange={yearsChange}
        className="Slider"
      />
    </Fragment>
  );
};

export default TimePeriod;
