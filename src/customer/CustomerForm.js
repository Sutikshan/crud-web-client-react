import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextInput from "../lib/TextInput";
import * as customerActions from "./customerActions";
import customerApi from "./customerApi";

class CustomerForm extends Component {
  constructor(props, context) {
    super(props, context);
    // note- single customer detail state is not connected with Redux. It is local state.
    this.state = {
      customer: { name: "" }
    };
    const id = props.match.params.id;
    if (id) {
      customerApi
        .getCustomerDetail(id)
        .then(customer => this.setState({ customer }));
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const customer = Object.assign({}, this.state.customer);
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

CustomerForm.contextTypes = {
  router: PropTypes.object
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
};
CustomerForm.PropTypes = {};

export default connect(null, mapDispatchToProps)(CustomerForm);
