import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="navbar__container">
    <div className="navbar__title row">
      <NavLink to="/" exact>
        FoodTruck
      </NavLink>
    </div>
    <div className="navbar__routes row">
      <NavLink to="/hours" exact>
        Hours
      </NavLink>

      <NavLink to="/menu" exact>
        Menu
      </NavLink>

      <NavLink to="/" exact>
        Home
      </NavLink>

      <NavLink to="/catering" exact>
        Catering
      </NavLink>
    </div>
  </div>
);

export default Navigation;
