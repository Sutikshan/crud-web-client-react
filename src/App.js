import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/configureStore";
import initialState from "./initialState";
import { loadCustomers } from "./customer/customerActions";
import Header from "./header/Header";
import Routes from "./routes";

const store = configureStore(initialState);
store.dispatch(loadCustomers());

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    </Provider>
  );
};
export default App;
