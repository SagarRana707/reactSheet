import React from  "react";
import "./App.css";
import StanderedFilled from "./component/standardFilled";
import StanderedOutline from "./component/standardOutline";
import RoundedFilled from "./component/roundedFilled";


function App() {
  return (
    <div>
      <h1 className="">Buttton Library</h1>
      <StanderedFilled background={"red"} color={"white"} text={"Primary"} />
      <StanderedOutline color={"red"} text={"Secondary"} />
      <RoundedFilled background={"red"} color={"white"} text={"Primary"} />
    </div>
  );
}

export default App;
