import React from  "react";
import "./App.css";
import AllUsers from "./components/allUsers/allUsers";

function App() {
 
  return (
    <div>
      <h1
        style={{
          width: "100%",
          backgroundColor: "#3486e7",
          textAlign: "center",
          color:'white',
          fontSize:'xxx-large',
          margin:'0px',
          padding:'13px 0px'
        }}
      >
        Pagination
      </h1>
      <AllUsers />
    </div>
  );
}

export default App;
