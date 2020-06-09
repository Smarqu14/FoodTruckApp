import React, { Component } from 'react';

const Modal = ({ show, handleModal, itemInfo }) => (

  <div className={show ? 'modal-open' : <></>}>
    <div className="modal-wrapper">
      <div className="modal-row">
        <div className="modal-left">
          <div className="modal-left-column">
            <button type="button" onClick={handleModal}>Exit</button>
            <h2>{itemInfo.item}</h2>
            <div className="modal-description">
              <p>{itemInfo.description}</p>
            </div>
            <div>
              <button type="button">leftClick</button>
              <span>---1---</span>
              <button type="button">RightClick</button>
            </div>
          </div>
        </div>
        <div className="modal-right">
          <div className="modal-right-column">
            <img id="modal-img" src={itemInfo.image} alt="food-menu" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Modal;
