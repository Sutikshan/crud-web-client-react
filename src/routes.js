import React from "react";
import { Route } from "react-router-dom";
import About from "./home/About";

const Routes = () => (
  <div>
    <Route path="/about" component={About} />
  </div>
);
export default Routes;
