import PropTypes from "prop-types";
import React from "react";

const CustomerListRow = ({ customer }) => (
  <tr>
    <td>
      <a href={`customer/{customer.id}`}>
        {customer.name}
      </a>
    </td>
  </tr>
);

CustomerListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerListRow;
