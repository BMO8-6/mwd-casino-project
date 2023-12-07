import React, { useState, useEffect } from "react";
import { getCurrentUserProfile } from "../Common/Services/Profiles.js";
import "../../styles/home.css";

const HomeView = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getCurrentUserProfile().then((profile) => {
      setProfile(profile);
    }).catch((error) => {
      console.error("Error fetching current user's profile:", error);
    });
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  const user = profile.get("user"); // Extract the user object from the profile


  const renderGameData = (gameData) => {
    console.log(gameData);
    return Object.entries(gameData).map(([game, data]) => (
      <div key={game} className="game-data">
        <strong>{game.charAt(0).toUpperCase() + game.slice(1)}:</strong>
        <ul>
          {Object.entries(data).map(([key, value]) => {
            if (key === 'money') {
              return (
                <li key={key}>
                  Money won: ${value.won}, Money lost: ${value.lost}
                </li>
              );
            } else if (key === 'record') {
              return (
                <li key={key}>
                  Record: {value.wins} wins, {value.losses} losses
                </li>
              );
            } else {
              return <li key={key}>{key}: {value}</li>;
            }
          })}
        </ul>
      </div>
    ));
  };

  return (
    <div className="profile">
      <h2>{user.get("firstName")} {user.get("lastName")}</h2>
      <p>Email: {user.get("email")}</p>
      <p>Username: {user.get("username")}</p>
      <p>Balance: ${profile.get("balance")}</p>
      {renderGameData(profile.get("gameData"))}  

      <p> Keep gambling! </p>
    </div>
  );
};

export default HomeView; 
