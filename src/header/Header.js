import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/customer">Customer</Link></li>
    </ul>
  </div>
);

export default Header;
