import React, { useState } from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "./circularProgress.css";

export default function App(props) {
  const [step, setStep] = useState(0);

  // Progress from 0 to 100

  const [intervalId, setIntervalId] = useState(null);

  function percentage() {
    let p = 0;
    if (intervalId) {
      clearInterval(intervalId);
    }

    if (p === 100) {
      return;
    } else {
      const newIntervalId = setInterval(() => {
        p++;
        setStep(p);
        if (p === 100) {
          clearInterval(newIntervalId);
        }
      }, 90);
      setIntervalId(newIntervalId);
    }
  }
  return (
    <div className="progressMainContainer">
      <div className="progress-container">
        <CircularProgressbar value={props.profit} text={`${props.profit}%`} />
      </div>
      <div className="action-container">
        
        <button
          onClick={percentage}
        >
          INVEST NOW
        </button>
      </div>
    </div>
  );
}
