import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./Utility/Home/App.js";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
