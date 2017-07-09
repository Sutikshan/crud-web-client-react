import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextInput from "../lib/TextInput";
import * as customerActions from "./customerActions";

class CustomerFormContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customer: { name: "" }
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const customer = this.state.customer;
    customer.name = event.target.value;
    this.setState({ customer });
  }

  onClickSave() {
    this.props.actions.createCustomerAsync(this.state.customer);
  }

  render() {
    return (
      <div>
        <h2>Add Customer</h2>
        <TextInput
          name="name"
          label="Customer Name"
          type="text"
          onChange={this.onNameChange}
          value={this.state.customer.name}
        />
        <input type="submit" onClick={this.onClickSave} value="Save" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    customer: state.customer
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
};
CustomerFormContainer.PropTypes = {
  customer: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CustomerFormContainer
);
