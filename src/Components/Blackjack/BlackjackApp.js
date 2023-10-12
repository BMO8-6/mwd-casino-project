import React from "react";
import Banner from "../../Components/Banner/Banner.js";
import BlackjackView from "./Blackjack.js";

const BlackjackApp = () => {
  console.log("Returning Blackjack Page");
  return (
    <div>
      <Banner /> <BlackjackView />
    </div>
  );
};

export default BlackjackApp;