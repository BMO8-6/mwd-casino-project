import React from "react";
import { Link } from "react-router-dom";
import Balance from "./Balance.js";
import "./banner.css";

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
        <Link to="/">Home</Link>
        <Link to="/blackjack">Blackjack</Link>
        <Link to="/roulette">Roulette</Link>
      </ul>
    </div>
  );
};

export default BannerView;
