import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import CustomerListRow from "./CustomerListRow";

const CustomersList = props => (
  <div>
    <h1>Customers</h1>
    <Link to="customer">
      Create
    </Link>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map(customer => (
          <CustomerListRow key={customer.id} customer={customer} />
        ))}
      </tbody>
    </table>
  </div>
);

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomersList;
