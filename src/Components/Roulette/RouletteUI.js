import React from "react";

const RouletteUI = ({ onClick }) => {
  console.log("Displaying RouletteView");

  // old html, placeholder for UI logic and interactions
  return (
    <div>
      <h1>
        Roulette
      </h1>
      <hr />
      <p>
        Here's the results from the spin:
      </p>
      <div className="table">
        <article><p style={{color: "red", display: "inline"}}>3</p></article>
        <article><p style={{color: "black", display: "inline"}}>26</p></article>
        <article><p style={{color: "green", display: "inline"}}>0</p></article>
        <article><p style={{color: "red", display: "inline"}}>32</p></article>
        <article><p style={{color: "black", display: "inline"}}>15</p></article>
      </div>
      <hr />
      <div className="actions">
        <form action="/action_page.php">
          <div>
            <label htmlFor="bet">Choose your bet size: </label><br />
            <select id="bet" name="bet">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="500">500</option>
            </select>
          </div>

          <div><input type="button" value="Submit" onChange={onClick} /></div>

        </form>
        <a>
          <img src={require("../../images/roulette-table.jpg")} alt="a roulette table"/>
        </a>
      </div>
    </div>
  );
};

export default RouletteUI;
