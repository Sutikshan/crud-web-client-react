import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const CustomerListRow = ({ customer }) => (
  <tr>
    <td>
      <Link to={`customer/${customer.id}`}>
        {customer.name}
      </Link>
    </td>
  </tr>
);

CustomerListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerListRow;
