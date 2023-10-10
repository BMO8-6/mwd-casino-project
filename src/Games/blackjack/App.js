import React from "react";
import Banner from "../../Utility/Banner/Banner.js";
import BlackjackView from "./Blackjack.js";

const App = () => {
  console.log("Returning Blackjack Page");
  return (
    <div>
      <Banner /> <BlackjackView />
    </div>
  );
};

export default App;