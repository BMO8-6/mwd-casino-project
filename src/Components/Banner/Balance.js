import React, { useEffect, useState } from "react";
import Parse from "parse";
import { getAllProfiles } from "../Common/Services/Profiles.js";  

const Balance = () => {
  const [profiles, setProfiles] = useState([]);
  
  useEffect(() => {
    getAllProfiles().then((profiles) => {
      setProfiles(profiles);
    });
  }, []);

  // when async isn't loaded yet, display placeholder
  // currently only loads the first profile as auth isn't implemented
  console.log("loading profiles: ", profiles);
  if (profiles.length === 0) {
    return ( 
      <div className="balance">Current Balance: LOADING...</div>
    );
  }

  for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].get("user")._getId() === Parse.User.current()._getId()) {
      return (
        <div className="balance">Current Balance: ${profiles[i].get("balance")}</div>
      );
    }
  }
};

export default Balance;
