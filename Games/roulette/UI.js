import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function UI({ userId }) {
  console.log("Displaying RouletteView");

  // old html, placeholder for UI logic and interactions
  return html`
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
    <p>Congrats! You've won $10k.</p>
    <button type="button">Spin again</button>
  `;
}
