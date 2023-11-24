import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import HooksApp from "./HooksApp";
import CounterApp from "./01-useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    <CounterApp />
  </React.StrictMode>
);
