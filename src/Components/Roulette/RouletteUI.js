import React from "react";
import RouletteGame from "./RouletteGame";
const RouletteUI = ({ onClick }) => {
  console.log("Displaying RouletteView");

  if (document.getElementById('container')) document.getElementById('container').style.display = 'flex';

  return (
    <div>
      <h1>
        Roulette
      </h1>
      <hr />
      <RouletteGame />
    </div>
  );
};

export default RouletteUI;
