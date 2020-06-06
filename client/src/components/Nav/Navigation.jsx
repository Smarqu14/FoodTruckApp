import React, { Component } from 'react';
import Navitem from './NavItem';

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
          <Navitem item="Home" tolink="/" active={this.activateitem} />
          <Navitem item="Hours" tolink="/hours" active={this.activateitem} />
          <Navitem item="Book Event" tolink="/booking" active={this.activateitem} />
          <Navitem item="Order" tolink="/order" active={this.activateitem} />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
