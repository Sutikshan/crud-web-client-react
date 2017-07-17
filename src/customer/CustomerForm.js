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
    // customer state is being managed locally, instead of from redux store.
    // it make cancel easy, and no need to add actions/reducer for each input field change.
    console.log("constructor called");
    this.state = {
      customer: initialState.customer,
      errors: [],
      saving: false,
      isDirty: false
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount called");

    const id = this.props.match.params.id;
    if (id) {
      this.props.actions.getCustomerAsync(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps called");

    if (this.state.customer.id !== nextProps.customer.id) {
      this.setState({
        customer: Object.assign({}, nextProps.customer),
        isDirty: false
      });
    }
  }

  onNameChange(event) {
    this.setState({
      customer: Object.assign({}, this.state.customer, {
        name: event.target.value
      }),
      isDirty: true
    });
  }

  onClickSave(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .saveCustomerAsync(this.state.customer)
      .then(() => this.redirect());
  }

  onClickCancel() {
    if (this.state.isDirty) {
      return confirm("Are you sure you want to cancel?")
        ? this.redirect()
        : null;
    }
    this.redirect();
  }

  redirect() {
    this.props.history.push("/customers");
  }

  render() {
    const { saving, isDirty, customer } = this.state;

    return (
      <div>
        <h2>Add Customer</h2>
        <TextInput
          name="name"
          label="Customer Name"
          type="text"
          onChange={this.onNameChange}
          value={customer.name}
        />
        <input
          type="submit"
          disabled={saving || !isDirty}
          onClick={this.onClickSave}
          value={saving ? "Saving" : "Save"}
        />
        <input type="button" onClick={this.onClickCancel} value="Close" />
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
