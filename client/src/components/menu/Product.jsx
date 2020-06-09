/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({ itemInfo, handleModal }) => (
  <div className="item" onClick={(e) => handleModal(e, itemInfo)}>
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
