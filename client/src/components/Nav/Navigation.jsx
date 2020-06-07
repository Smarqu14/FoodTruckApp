import React, { Component } from 'react';
import NavItem from './NavItem';
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
      <nav>
        <ul className="menu">
          <NavItem item="Hours" tolink="/hours" active={this.activateitem} />
          <NavItem item="Menu" tolink="/menu" active={this.activateitem} />
          <NavItem item="Home" tolink="/" active={this.activateitem} />
          <NavItem item="Book Event" tolink="/booking" active={this.activateitem} />
          <OrderButton item="Order Now" tolink="/order" active={this.activateitem} />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
