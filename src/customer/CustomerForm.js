import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import initialState from "../initialState";
import TextInput from "../lib/TextInput";
import * as customerActions from "./customerActions";

class CustomerForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customer: initialState.customer,
      errors: []
    };

    const id = props.match.params.id;
    if (id) {
      this.props.actions.getCustomerAsync(id);
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customer.id !== nextProps.customer.id) {
      this.setState({
        customer: Object.assign({}, nextProps.customer)
      });
    }
  }

  onNameChange(event) {
    this.setState({
      customer: Object.assign({}, this.state.customer, {
        name: event.target.value
      })
    });
  }

  onClickSave() {
    this.props.actions
      .saveCustomerAsync(this.state.customer)
      .then(() => this.redirect());
  }

  onClickCancel() {
    if (confirm("Are you sure you want to cancel?")) this.redirect();
  }

  redirect() {
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
          value={this.state.customer.name}
        />
        <input type="submit" onClick={this.onClickSave} value="Save" />
        <input type="button" onClick={this.onClickCancel} value="Cancel" />
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
