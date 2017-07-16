import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextInput from "../lib/TextInput";
import * as customerActions from "./customerActions";

class CustomerForm extends Component {
  constructor(props, context) {
    super(props, context);

    const id = props.match.params.id;
    if (id) {
      this.props.actions.getCustomerAsync(id);
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    this.props.actions.updateName(event.target.value);
  }

  onClickSave() {
    this.props.actions.saveCustomerAsync(this.props.customer);
    this.props.history.push("/customers");
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
          value={this.props.customer.name}
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
CustomerForm.PropTypes = {
  customer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
