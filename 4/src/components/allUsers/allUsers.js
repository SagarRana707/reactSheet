import React, { useState, useEffect, Fragment, useCallback } from "react";
import "./allusers.css";
import User from "./user";
import SingleUsers from "../singleUser/singelUser";

function AllUsers(props) {
   const [modal, setModal] = useState(false);
   const [singleUser, setSingleUser] = useState(false);
   function viewSingleUser() {
     setModal(!modal);
   }
   function showSingleUser(id){
  let user =   users.find( user =>  user.id === id);
setSingleUser(user);
console.log(user,id);
   }
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePagination = useCallback(
    (isNext) => {
      if (isNext) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        if (currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      }
    },
    [currentPage]
  );

  useEffect(() => {
    const fetchUsers = () => {
      const userApi = `https://reqres.in/api/users?page=${currentPage}`;
      fetch(userApi)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          setUsers(data.data);
        })
        .catch((error) => {
          console.error("Error fetching users: ", error);
        });
    };

    fetchUsers();
  }, [currentPage]);

  return (
    <Fragment>
      <div className="allUsers">
        {users.length > 0 ? (
          users.map((user) => (
            <User
            key={user.id}
              img={user.avatar}
              name={user.first_name}
              email={user.email}
              id={user.id}
              show={viewSingleUser}
              showUser={showSingleUser}
            />
          ))
        ) : (
          <li>No users available.</li>
        )}
      </div>
      <div className="buttons">
        <button onClick={() => handlePagination(false)}>Previous</button>
        <button onClick={() => handlePagination(true)}>Next</button>
      </div>
      {modal && (
        <SingleUsers onClose={viewSingleUser} singleUser={singleUser} />
      )}
    </Fragment>
  );
}

export default AllUsers;
