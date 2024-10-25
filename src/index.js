import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { AliveScope } from "react-activation";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <AliveScope>
      <App />
    </AliveScope>
  </HashRouter>,
  document.getElementById("root")
);
