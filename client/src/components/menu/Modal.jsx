import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

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
              <S.Button type="button" className="btn">
                <FontAwesomeIcon icon={faMinusCircle} size="2x" />
              </S.Button>
              <span> 1 </span>
              <S.Button type="button" className="btn">
                <FontAwesomeIcon icon={faPlusCircle} size="2x" />
              </S.Button>
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


const S = {};
S.Button = styled.button`
  color: #111;
  cursor: pointer;
  opacity: .75;
  transform: translateY(-50%);
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: .5;
  }
`;