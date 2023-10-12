import React from "react";
import { Link } from "react-router-dom";
import Balance from "./Balance.js";
import "../../styles/banner.css";

const BannerView = () => {
  // doesn't handle auth atm
  console.log("Displaying banner");
  return (
    <div className="banner">
      <div className="logo">
        <Link to="/">
          <img src={require("../../images/logo.jpg")} alt="logo"/>
        </Link>
        <Balance />
      </div>
      <ul className="navigation">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blackjack" className="nav-link">Blackjack</Link>
        <Link to="/roulette" className="nav-link">Roulette</Link>

      </ul>
    </div>
  );
};

export default BannerView;
