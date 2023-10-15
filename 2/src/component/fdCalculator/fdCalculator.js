import React, { useState } from "react";
import "./fdCalculator.css";
import TotalInvestMent from "./totalInvestment";
import RateOfIntrest from "./rateOfIntrest";
import TimePeriod from "./timePeriod";
import { BiRupee } from "react-icons/bi";
import CircularProgressBar from "./circularProgress";

function FdCalculator() {
  const [p, setp] = useState(0);
  const [r, setr] = useState(1);
  const [t, sett] = useState(1);
  const [estReturn, setestReturn] = useState(0);
  const [totalValue, settotalValue] = useState(0);
  const [profit, setProfitPercentage] = useState(0);
  function calculatefd() {
    let finalReturns = p + (p * r * t) / 100;
    finalReturns = finalReturns - p;
    setestReturn(finalReturns.toFixed(2));
    let total = finalReturns + p;
    settotalValue(total);
const profitPercentage = parseInt(((total - p) / p) * 100);
setProfitPercentage(profitPercentage);
console.log(profitPercentage);
  }
  return (
    <div className="fd">
      <div className="prtOfFd">
        <TotalInvestMent p={p} setp={setp} calculatefd={calculatefd} />
        <RateOfIntrest r={r} setr={setr} calculatefd={calculatefd} />
        <TimePeriod t={t} sett={sett} calculatefd={calculatefd} />
        <div>
          <div className="I">
            <p>Invested amount</p>{" "}
            <div>
              <BiRupee />
              {p}
            </div>
          </div>
          <div className="estReturn">
            <p>Est. returns</p>{" "}
            <div>
              <BiRupee />
              {estReturn}
            </div>
          </div>
          <div className="totalValue">
            <p>Total value</p>{" "}
            <div>
              <BiRupee />
              {totalValue}
            </div>
          </div>
        </div>
      </div>
      {/* <p> investment and return div starts from here</p> */}
      <div className="investReturns">
        <div className="investReturn">
          <div className="totalSpan">
            <span></span>
            <p>Total Investment</p>
          </div>
          <div className="returnSpan">
            <span></span>
            <p>Total Return</p>
          </div>
        </div>
        <CircularProgressBar profit={profit}/>
      </div>
    </div>
  );
}

export default FdCalculator;
