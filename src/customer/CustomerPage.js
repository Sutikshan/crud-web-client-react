import PropTypes from "prop-types";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomersList from "./customersList/CustomersList";
import "./customerPage.css";
import * as customerActions from "./customerActions";

class CustomerPage extends Component {
  render() {
    return (
      <div className="list">
        <CustomersList {...this.props} />
      </div>
    );
  }
}

CustomerPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
