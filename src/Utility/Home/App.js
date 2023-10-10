import React from "react";
import Parse from "parse";
import Banner from "../Banner/Banner.js";
import HomeView from "./Home.js";
import * as Env from "../../environments";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const App = () => {
  console.log("Returning Home Page");
  return (
  <div><Banner /> <HomeView /></div>
  );
};

export default App;
