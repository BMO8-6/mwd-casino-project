import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Banner from "../../Utility/Banner/Banner.js";
import BlackjackView from "./Blackjack.js";

function App() {
  console.log("Returning Blackjack Page");
  return html`<${Banner} /> <${BlackjackView} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
