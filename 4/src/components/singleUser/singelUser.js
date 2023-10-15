import React from "react";
import "./singelUser.css";
import Modal from "../modal/modal";

function SingleUsers(props) {
  let name = `Hello i am ${props.singleUser.first_name} ${props.singleUser.last_name}`;
  let fullName = `${props.singleUser.first_name} ${props.singleUser.last_name}`;
  return (
    <Modal onClose={props.onClose}>
      <div className="singleUsers">
        <h4>{name}</h4>
        <div className="showUserDetails">
          <img
            src={props.singleUser.avatar}
            alt={props.singleUser.first_name}
            width={"100%"}
            height={"120px"}
          />
          <p>{fullName}</p>
          <p>{props.singleUser.email}</p>
        </div>
      </div>
    </Modal>
  );
}

export default SingleUsers;
