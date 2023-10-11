import React from "react";

const UI = () => {
  console.log("Displaying BlackjackView");

  // old html, placeholder for UI logic and interactions
  return (
    <div>
      <h1>Blackjack</h1>
      <hr />

      <div className="table">
        <div className="hand">
          The dealer's hand (temp placeholders):
          <ul>
            <li>♠3</li>
            <li>♠2</li>
          </ul>
        </div>
        <div className="hand">
          Here is your hand (temp placeholders):
          <ul>
            <li>♠A</li>
            <li>♠K</li>
          </ul>
        </div>
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
          <div>
            <input type="radio" id="hit" name="action" value="hit" checked />
            <label htmlFor="hit">Hit</label><br />
            <input type="radio" id="stand" name="action" value="stand" />
            <label htmlFor="stand">Stand</label><br />
            <input type="radio" id="double" name="action" value="double" />
            <label htmlFor="double">Double</label><br />
            <input type="radio" id="split" name="action" value="split" />
            <label htmlFor="split">Split</label><br />
          </div>
          <div><input type="submit" value="Submit" /></div>
        </form>
      </div>
    </div>
  );
};

export default UI;