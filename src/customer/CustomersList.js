import PropTypes from "prop-types";
import React from "react";
import CustomerListRow from "./CustomerListRow.jsx";

const CustomersList = props => (
  <div>
    <h1>Customers</h1>
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
