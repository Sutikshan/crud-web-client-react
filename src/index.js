import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import App from "./App";
import Routes from "./routes";
import { loadCustomers } from "./customer/customerActions";
import "./index.css";

const store = configureStore();
store.dispatch(loadCustomers());

const Index = () => (
  <Router>
    <div>
      <App />
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/customerlist">Customer</Link></li>
      </ul>
      <Routes />
    </div>
  </Router>
);

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
