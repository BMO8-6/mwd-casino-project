import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Banner from "../Banner/Banner.js";
import HomeView from "./Home.js";

function App() {
  console.log("Returning Home Page");
  return html`<${Banner} /> <${HomeView} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
