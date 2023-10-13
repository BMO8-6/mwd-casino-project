import React, { useEffect, useState } from "react";
import { getAllProfilesWithUsers } from "../Common/Services/Profiles.js";  // Assuming you've renamed and updated the Users.js to Profiles.js

const Balance = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getAllProfilesWithUsers().then((profiles) => {
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
  return (
    <div className="balance">Current Balance: ${profiles[0].get("balance")}</div>
  );
};

export default Balance;
