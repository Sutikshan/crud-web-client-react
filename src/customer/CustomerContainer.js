import PropTypes from "prop-types";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomersList from "./CustomersList";

import * as customerActions from "./customerActions";

class Customer extends Component {
  render() {
    return (
      <div>
        <CustomersList {...this.props} />
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
