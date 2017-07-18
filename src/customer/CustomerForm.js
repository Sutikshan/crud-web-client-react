import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import initialState from "../initialState";
import TextInput from "../lib/TextInput";
import Notification from "../lib/notification/Notification";
import * as customerActions from "./customerActions";

const initialFormState = {
  customer: initialState.customer,
  errors: [],
  saving: false,
  isDirty: false,
  showNotification: false
};

class CustomerForm extends Component {
  constructor(props, context) {
    super(props, context);
    // customer state is being managed locally, instead of from redux store.
    // it make cancel easy, and no need to add actions/reducer for each input field change.
    this.state = initialFormState;
    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.reload = this.reload.bind(this);
    this.redirect = this.redirect.bind(this);
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.props.actions.getCustomerAsync(id);
      this.setState({ editMode: true });
    }
  }

  componentWillReceiveProps(nextProps) {
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
      .then(
        () => (this.state.editMode ? this.redirect() : this.showNotification())
      )
      .catch(err => this.showNotification(err));
  }

  onClickClose() {
    if (this.state.isDirty) {
      return confirm("Are you sure you want to close?")
        ? this.redirect()
        : null;
    }
    this.redirect();
  }

  showNotification(error) {
    this.props.history.push(`/customer/${this.props.customer.id}`);
    this.setState({
      showNotification: true,
      saving: false,
      isDirty: false,
      customer: this.props.customer
    });
    if (error) {
      this.setState({ errors: [error] });
    }
  }

  redirect() {
    this.props.history.push("/customers");
  }

  reload() {
    this.props.history.push("/customer");
    this.setState(initialFormState);
  }

  render() {
    const {
      saving,
      isDirty,
      customer,
      showNotification,
      editMode
    } = this.state;
    const hasError = this.state.errors && this.state.errors.length > 0;

    return (
      <div>
        <h2>
          {editMode ? "Edit" : "Add"} Customer
        </h2>
        <Notification
          visible={showNotification}
          text={
            hasError
              ? `Form has error:- ${this.state.errors[0]}`
              : "Saved Successfully!"
          }
          withButtons={!hasError}
          type={hasError ? "danger" : "success"}
          closeOnClick={this.redirect}
          anotherOnClick={this.reload}
        />
        <TextInput
          name="name"
          label="Customer Name"
          type="text"
          onChange={this.onNameChange}
          value={customer.name}
        />
        <input
          type="submit"
          minLength={3}
          disabled={saving || !isDirty}
          onClick={this.onClickSave}
          value={saving ? "Saving" : "Save"}
        />
        <input type="button" onClick={this.onClickClose} value="Close" />
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
