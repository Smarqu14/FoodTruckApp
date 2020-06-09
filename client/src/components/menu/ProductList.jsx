import React, { Component } from 'react';
import Product from './Product';
import Modal from './Modal';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      modal: false,
      itemInfo: {},
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(e, data) {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      itemInfo: data,
    });
  }

  render() {
    const { data, modal, itemInfo } = this.state;
    const foodItem = data.map((item, i) => (
      <Product key={i} itemInfo={item} handleModal={this.handleModal} />
    ));

    return (
      <div>
        <div className="panel">
          <h2 id="menu-right">  Menu</h2>
          <div className="food-list">
            {foodItem}
          </div>
          {
          modal
            ? (
              <Modal
                itemInfo={itemInfo}
                show={modal}
                handleModal={this.handleModal}
              />
            )
            : <> </>
          }
        </div>
      </div>
    );
  }
}
