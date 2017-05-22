import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Routes from "./routes";
import "./index.css";
import Header from "./header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Index = () => (
  <Router>
    <div>
      <App>
        <Header />
        <Routes />
      </App>
    </div>
  </Router>
);
ReactDOM.render(<Index />, document.getElementById("root"));
