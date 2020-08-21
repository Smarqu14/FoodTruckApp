import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar__Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: black;
  color: white;
  align-items: stretch;
`;

const Navbar__Title = styled.div`
  margin-left: 100px;
  flex: 50%;
  font-size: 40px;

  a {
    list-style: none;
    text-decoration: none;
    color: white;
  }
`;

const Navbar__Routes = styled.div`
  display: flex;
  width: 20%;
  margin: auto;
  justify-content: space-around;

  a {
    list-style: none;
    text-decoration: none;
    color: white;
    margin-bottom: 5px;

    &:hover {
      border-bottom: 1px solid green;
      transition: border-bottom 0.5s;
    }
  }
`;
const Navigation = () => (
  <Navbar__Container>
    <Navbar__Title>
      <NavLink to="/">FoodTruck</NavLink>
    </Navbar__Title>
    <Navbar__Routes>
      <NavLink to="/hours">Hours</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catering">Catering</NavLink>
    </Navbar__Routes>
  </Navbar__Container>
);

export default Navigation;
