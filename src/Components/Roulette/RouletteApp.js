import React from "react";
import Banner from "../../Components/Banner/Banner.js";
import RouletteView from "./Roulette.js";

const RouletteApp = () => {
  console.log("Returning Roulette Page");
  return (
    <div>
      <Banner /> <RouletteView />
    </div>
  );
}

export default RouletteApp;
