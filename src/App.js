import React, { Component, PropTypes } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Easy CRM</h2>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.array.isRequired
};

export default App;
