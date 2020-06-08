/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({ itemInfo }) => (
  <div className="item">
    <img id="menu-image" src={itemInfo.image} alt="food-menu" />
    <div className="item-info">
      <h3>{itemInfo.item}</h3>
      <span>
        $
        {itemInfo.price}
      </span>
      <br />
      <p>{itemInfo.description}</p>
    </div>
  </div>
);

export default Product;
