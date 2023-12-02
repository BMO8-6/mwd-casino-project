import React, { useEffect, useState } from "react";
import { getCurrentUserProfile } from "../Common/Services/Profiles.js";  

const Balance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    getCurrentUserProfile().then((profile) => {
      if (profile) {
        setBalance(profile.get("balance"));
      } else {
        // Handle case when profile is not found
        console.log("Profile not found for current user.");
      }
    }).catch((error) => {
      console.error("Error fetching current user's profile:", error);
    });
  }, []);

  if (balance === null) {
    return <div className="balance">Current Balance: LOADING...</div>;
  }
  return <div className="balance">Current Balance: ${balance}</div>;
};

export default Balance;
