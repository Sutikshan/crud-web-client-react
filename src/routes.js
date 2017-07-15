import React from "react";
import { Route } from "react-router-dom";
import About from "./home/About";
import CustomerPage from "./customer/CustomerPage";
import CustomerForm from "./customer/CustomerForm";

const Routes = () => (
  <div>
    <Route path="/about" component={About} />
    <Route path="/customer/:id?" component={CustomerForm} />
    <Route path="/customerlist" component={CustomerPage} />
  </div>
);
export default Routes;
