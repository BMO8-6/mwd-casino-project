// import React, { useState, useEffect } from "react";
// import { getAllUsers } from "../Common/Services/Users.js";
// import "../../styles/home.css"

// const HomeView = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     getAllUsers().then((users) => {
//       if (users && users.length > 0) {
//         setUser(users[0]);
//       }
//     });
//   }, []);

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   const renderGameData = (gameData) => {
//     return Object.entries(gameData).map(([game, data]) => (
//       <div key={game} className="game-data">
//         <strong>{game.charAt(0).toUpperCase() + game.slice(1)}:</strong>
//         <ul>
//           {Object.entries(data).map(([key, value]) => {
//             if (key === 'money') {
//               return (
//                 <li key={key}>
//                   Money won: ${value.won}, Money lost: ${value.lost}
//                 </li>
//               );
//             } else if (key === 'record') {
//               return (
//                 <li key={key}>
//                   Record: {value.wins} wins, {value.losses} losses
//                 </li>
//               );
//             } else {
//               return <li key={key}>{key}: {value}</li>;
//             }
//           })}
//         </ul>
//       </div>
//     ));
//   };
  
  

//   return (
//     <div className="profile">
//       <h2>{user.get("firstName")} {user.get("lastName")}</h2>
//       <p>Email: {user.get("email")}</p>
//       <p>Username: {user.get("username")}</p>
//       <p>Balance: ${user.get("balance")}</p>
//       {renderGameData(user.get("gamesData"))}
//       <p>Favorites: {user.get("favorites").join(", ")}</p>
      
//       <p> Keep gambling! </p>
//     </div>
//   );
// };

// export default HomeView;
import React, { useState, useEffect } from "react";
import { getAllProfiles } from "../Common/Services/Profiles.js"; // Adjusted the import path to the new service file
import "../../styles/home.css";

const HomeView = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getAllProfiles().then((profiles) => {
      if (profiles && profiles.length > 0) {
        setProfile(profiles[0]);
      }
    });
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  const user = profile.get("user"); // Extract the user object from the profile

  const renderGameData = (gameData) => {
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
      {renderGameData(profile.get("gameData"))}  {/* Adjusted from "gamesData" to "gameData" */}
      <p>Favorites: {profile.get("favorites").join(", ")}</p>
      
      <p> Keep gambling! </p>
    </div>
  );
};

export default HomeView; 
