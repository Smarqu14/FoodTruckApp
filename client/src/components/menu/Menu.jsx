import React from 'react';
import SideMenu from './SideMenu';
import ProductList from './ProductList';


const Menu = ({ data }) => (
  <div className="menu-wrapper">
    <div className="row-menu">
      <div className="left">
        <div className="left-column">
          <SideMenu data={data} />
        </div>
      </div>
      <div className="right">
        <div className="right-column">
          <ProductList data={data} />
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
