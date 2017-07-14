import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "./Header.css";

const Header = () => (
  <header className="App-header">
    <div className="App-header-left">
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <div><h2 className="App-name">Easy CRM</h2></div>
    </div>
    <div className="Header-menu">
      <div className="Menu-item"><Link to="/about">About</Link></div>
      <div className="Menu-item"><Link to="/customerlist">Customer</Link></div>
    </div>
  </header>
);

export default Header;
