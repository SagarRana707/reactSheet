import React, { Fragment} from "react";
import { FiPercent } from "react-icons/fi";
import "./rateOfInterest.css";

const RateOfInterest = (props) => {

  function rateChange(e) {
      const currentRate = parseFloat(e.target.value);
      props.setr(currentRate);
      props.calculatefd();
  }

  return (
    <Fragment>
      <div className="rateOfInterest">
        <p className="">Rate of interest (p.a)</p>{" "}
        <div className="interest">
          <input
            type="number"
            min="0.1"
            max="15"
            step="0.1"
            value={props.r}
            onChange={rateChange}
          />
          <FiPercent />{" "}
        </div>
      </div>
      <input
        type="range"
        min="0.1"
        max="15"
        step="0.1"
        value={props.r}
        onChange={rateChange}
        className="Slider"
      />
    </Fragment>
  );
};

export default RateOfInterest;
