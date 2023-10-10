import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../Services/Users.js";
import Balance from "./Balance.js";

const BannerView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  // at the moment, since we only have one user, we just pass
  // the whole users object. In the future, we might do something
  // with cookies or just keep 1 user depending on project requirements
  console.log("Displaying banner");
  return (
    <div className="banner">
      <div className="logo">
        <a href="../../index.html">
          <img src="../../images/logo.jpg" alt="logo"/>
        </a>
        <Balance users={users} />
      </div>
      <ul className="navigation">
        <li><a href="/public/index.html">Home</a></li>
        <li><a href="/src/Games/blackjack/blackjack.html">Blackjack</a></li>
        <li><a href="/src/Games/roulette/roulette.html">Roulette</a></li>
      </ul>
    </div>
  );
};

export default BannerView;
