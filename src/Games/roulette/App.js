import React from "react";
import Banner from "../../Utility/Banner/Banner.js";
import RouletteView from "./Roulette.js";

const App = () => {
  console.log("Returning Roulette Page");
  return (
    <div>
      <Banner /> <RouletteView />
    </div>
  );
}

export default App;
