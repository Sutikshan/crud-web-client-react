import PropTypes from "prop-types";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as customerActions from "./customerActions";

class Customer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customer: { name: "" }
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.customerRow = this.customerRow.bind(this);
  }

  onNameChange(event) {
    const customer = this.state.customer;
    customer.name = event.target.value;
    this.setState({ customer });
  }

  onClickSave() {
    this.props.actions.createCustomer(this.state.customer);
  }

  customerRow(customer, index) {
    return <div key={index}>{customer.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Customers</h1>
        {this.props.customers.map(this.customerRow)}
        <h2>Add Customer</h2>
        <input
          type="text"
          onChange={this.onNameChange}
          value={this.state.customer.name}
        />

        <input type="submit" onClick={this.onClickSave} value="Save" />

      </div>
    );
  }
}

Customer.propTypes = {
  customers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
