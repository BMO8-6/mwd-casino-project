import React from "react";

const Balance = ({ users }) => {
  // when async isn't loaded yet, display placeholder
  if (users.length === 0) {
    return ( 
      <div className="balance">Current Balance: LOADING...</div>
    );
  }
  return (
    <div className="balance">Current Balance: ${users[0]["balance"]}</div>
  );
};

export default Balance;
