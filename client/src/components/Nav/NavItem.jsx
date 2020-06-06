/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navitem = ({ tolink, active, item }) => (
  <li className="item active">
    <NavLink to={tolink} onClick={active}>
      {item}
    </NavLink>
  </li>
);

export default Navitem;
