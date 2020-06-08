import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    const { data } = this.state;
    const foodItem = data.map((item, i) => (
      <Product key={i} itemInfo={item} />
    ));

    return (
      <div>
        <div className="panel">
          <h2> Menu</h2>
          <div className="food-list">{foodItem}</div>
        </div>
      </div>
    );
  }
}
