import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OrderButton from './OrderButton';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItemActive: false,
    };
    this.activateitem = this.activateitem.bind(this);
  }

  activateitem() {
    this.setState((state) => ({
      navItemActive: !state.navItemActive,
    }));
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/hours"
              onClick={this.activateitem}
              activeClassName="navbar__link--active"
              className="navbar__link"
              exact
            >
              Hours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              onClick={this.activateitem}
              activeClassName="navbar__link--active"
              className="navbar__link"
              exact
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={this.activateitem}
              activeClassName="navbar__link--active"
              className="navbar__link"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              onClick={this.activateitem}
              activeClassName="navbar__link--active"
              className="navbar__link"
              exact
            >
              Book Event
            </NavLink>
          </li>
          <li>
            <OrderButton
              onClick={this.activateitem}
              activeClassName="navbar__link--active"
              className="navbar__link"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
