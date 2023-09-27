import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Banner from "../../Utility/Banner/Banner.js";
import RouletteView from "./Roulette.js";

function App() {
  console.log("Returning Roulette Page");
  return html`<${Banner} /> <${RouletteView} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
