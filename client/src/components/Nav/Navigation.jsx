import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
// import OrderButton from './OrderButton';

const Nav = styled.header`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 100px;
  margin-bottom: 60px;
  background: #121212;

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }

  .sub-title {
    color: red;
  }
  .order-now {
    width: 170px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 0px 2px rgba (0, 0, 0, 0.3);
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }
  a {
    color: white;
    transition: all 0.6s;
    font-size: 2em;
    text-decoration: none;
    list-style-type: none;
  }
  a:hover {
    opacity: 0.5;
  }
  .fa-bars {
    display: none;
    color: white;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 0.7em;
      a {
        text-decoration: none;
        font-size: 1em;
      }
    }
    a.active {
      color: red;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
    height: auto;
    min-height: 50px;
    display: block;
  }
  @media only screen and (max-width: 1200px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
    height: auto;
    min-height: 50px;
    display: inline-block;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px;
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    const { isExpanded } = this.state;
    e.preventDefault();
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <Nav>
        <div className="logo">
          <NavLink to="/">
            <p>
              Food
              <span className="sub-title">Truck</span>
            </p>
            <em>
              <div className="letterhead">
                <span>Created by </span>
                <span className="sub-title">Steve Marquez</span>
              </div>
            </em>
          </NavLink>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
            <NavLink to="/hours" activeClassName="active" exact>
              <li>Hours</li>
            </NavLink>
            <NavLink to="/menu" activeClassName="active" exact>
              <li>Menu</li>
            </NavLink>
            <NavLink to="/" activeClassName="active" exact>
              <li>Home</li>
            </NavLink>
            <NavLink to="/booking" activeClassName="active" exact>
              <li>Cartering</li>
            </NavLink>
            <NavLink
              to="/order"
              activeClassName="active"
              exact
              className="order-now"
            >
              <li>Order Now!</li>
            </NavLink>
          </ul>
        </nav>
      </Nav>
    );
  }
}

export default Navigation;
