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
      // <nav>
      //   <ul className="nav-menu">
      //     <NavItem item="Hours" tolink="/hours" active={this.activateitem} />
      //     <NavItem item="Menu" tolink="/menu" active={this.activateitem} />
      //     <NavItem item="Home" tolink="/" active={this.activateitem} />
      //     <NavItem item="Book Event" tolink="/booking" active={this.activateitem} />
      //     <OrderButton item="Order Now" tolink="/order" active={this.activateitem} />
      //   </ul>
      // </nav>
      <nav>
        <ul className="nav-menu">
          <li>
            <NavLink to="/hours" onClick={this.activateitem}>
              Hours
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={this.activateitem}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={this.activateitem}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" onClick={this.activateitem}>
              Book Event
            </NavLink>
          </li>
          <li>
            <OrderButton onClick={this.activateitem} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
