import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "normalize.css";
import "./index.scss";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
      { routes }
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
