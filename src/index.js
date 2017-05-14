import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Routes from "./routes";
import "./index.css";
import { Link } from "react-router-dom";

const Index = () => (
  <Router>
    <div>
      <App />
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/customer">Customer</Link></li>
      </ul>
      <Routes />
    </div>

  </Router>
);
ReactDOM.render(<Index />, document.getElementById("root"));
