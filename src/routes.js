import React from "react";
import { Route } from "react-router-dom";
import About from "./home/About";
import Customer from "./customer/Customer";

const Routes = () => (
  <div>
    <Route path="/about" component={About} />
    <Route path="/customer" component={Customer} />
  </div>
);
export default Routes;
