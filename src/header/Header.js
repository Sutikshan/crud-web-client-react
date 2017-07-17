import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "./header.css";

class Header extends React.Component {
  render() {
    let logoClass = "App-logo";
    if (this.props.loading) {
      logoClass += " App-logo-loading";
    }

    return (
      <header className="App-header">
        <div className="App-header-left">
          <div>
            <img src={logo} className={logoClass} alt="logo" />
          </div>
          <div>
            <h2 className="App-name">Easy CRM</h2>
          </div>
        </div>
        <div className="Header-menu">
          <div className="Menu-item">
            <Link to="/customers">Customers</Link>
          </div>
          <div className="Menu-item">
            <Link to="/about">About</Link>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.numAjaxCallsInProgress > 0
  };
}
export default connect(mapStateToProps)(Header);
