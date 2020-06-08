import React from "react";

const Product = ({ itemInfo }) => {
  console.log(itemInfo)
  return (
    <div className="item">
      <h3>{itemInfo.item}</h3>
      <p>{itemInfo.description}</p>
    </div>
  );
};

export default Product;
