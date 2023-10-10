import React from "react";

const UI = ({ userId }) => {
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
      <div class="table">
        <article><p style="color: red; display: inline;">3</p></article>
        <article><p style="color: black; display: inline;">26</p></article>
        <article><p style="color: green; display: inline;">0</p></article>
        <article><p style="color: red; display: inline;">32</p></article>
        <article><p style="color: black; display: inline;">15</p></article>
      </div>
      <hr />
      <div class="actions">
        <form action="/action_page.php">
          <div>
            <label for="bet">Choose your bet size: </label><br />
            <select id="bet" name="bet">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="500">500</option>
            </select>
          </div>

          <div><input type="submit" value="Get Chip" /></div>
        </form>
        <a>
          <img src="../../images/roulette-table.jpg" />
        </a>
      </div>
    </div>
  );
};
