import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Navbar__Container,
  Navbar__Title,
  Navbar__Routes,
} from "../styled/navigation";

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
