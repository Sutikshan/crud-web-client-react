import React from "react";
import { Route } from "react-router-dom";
import About from "./home/About";
import CustomerPage from "./customer/CustomerPage";
import ManageCustomer from "./customer/manageCustomer/ManageCustomer";

const Routes = () =>
  <div>
    <Route path="/about" component={About} />
    <Route path="/customer/:id?" component={ManageCustomer} />
    <Route path="/customers" component={CustomerPage} />
  </div>;

export default Routes;
