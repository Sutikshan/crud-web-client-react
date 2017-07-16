import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Header from "./header/Header";
import Routes from "./routes";
import { loadCustomers } from "./customer/customerActions";
import initialState from "./initialState";
import "./index.css";

const store = configureStore(initialState);
store.dispatch(loadCustomers());

render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Routes />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
