import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  const { titles } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {titles}
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fa fa-home"> Home</i>
            </Link>
          </li>
          <li>
            <Link to="/contact/add" className="nav-link">
              <i className="fa fa-plus"> Add</i>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              <i className="fa fa-info"> About</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  titles: "My App"
};

Header.protoType = {
  titles: PropTypes.object.isRequired
};

export default Header;
