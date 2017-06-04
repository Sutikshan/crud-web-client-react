import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import App from "./App";
import Routes from "./routes";
import "./index.css";
import Header from "./header/Header";

const store = configureStore();

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

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
