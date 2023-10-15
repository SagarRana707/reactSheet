import React, { Fragment, useRef } from "react";
import { BiRupee } from "react-icons/bi";
import "./totalInvestment.css";

const TotalInvestMent = (props) => {
  const setPrinciple = useRef();

  function pricipalChange(event) {
    const currentPrincipal = parseInt(event.target.value);
    console.log(currentPrincipal, "current prinicipla");
    props.setp(currentPrincipal);
    props.calculatefd();
  }

  return (
    <Fragment>
      <div className="totalInvestment">
        <p className="">Total Investment</p>{" "}
        <div className="amount">
          <BiRupee />{" "}
          <input
            type="number"
            min={5000}
            max={1000000}
            ref={setPrinciple}
            value={props.p}
            onChange={pricipalChange}
            className="amountInput"
          />
        </div>
      </div>
      <input
        type="range"
        min="5000"
        max="10000000"
        step="1"
        className="Slider"
        value={props.p}
        onChange={pricipalChange}
        id="investmentSlider"
      />
    </Fragment>
  );
};

export default TotalInvestMent;
