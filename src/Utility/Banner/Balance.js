import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../Services/Users.js";


const Balance = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  // when async isn't loaded yet, display placeholder
  // currently only loads first user as auth isn't implemented
  console.log("loading users: ", users);
  if (users.length === 0) {
    return ( 
      <div className="balance">Current Balance: LOADING...</div>
    );
  }
  return (
    <div className="balance">Current Balance: ${users[0].get("balance")}</div>
  );
};

export default Balance;
