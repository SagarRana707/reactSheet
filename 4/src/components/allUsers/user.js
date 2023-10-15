import React from "react";
import "./allusers.css";

function User(props) {
    function showSingleUser(id){
props.show();
console.log(id);
props.showUser(id);
    }
  return (
    <div className="user" onClick={() => showSingleUser(props.id)} key={props.id}>
      <img
        src={props.img}
        alt={`User ${props.name}`}
        height="100px"
        width={"69px"}
      />
      <div>
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default User;
