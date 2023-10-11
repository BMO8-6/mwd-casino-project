import React from "react";
import Banner from "../Banner/Banner.js";
import HomeView from "./Home.js";

const HomeApp = () => {
  console.log("Returning Home Page");
  return (
  <div><Banner /> <HomeView /></div>
  );
};

export default HomeApp;
