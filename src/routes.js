import React from "react";
import { Route } from "react-router-dom";
import About from "./home/About";
import CustomerContainer from "./customer/CustomerContainer";
import CustomerFormContainer from "./customer/CustomerFormContainer";

const Routes = () => (
  <div>
    <Route path="/about" component={About} />
    <Route path="/customer/:id" component={CustomerFormContainer} />
    <Route path="/customerlist" component={CustomerContainer} />
  </div>
);
export default Routes;
