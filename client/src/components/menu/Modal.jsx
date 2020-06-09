import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Modal = ({ show, handleModal, itemInfo }) => (
  <div className={show ? 'modal-open' : <></>}>
    <div className="modal-wrapper">
      <div className="modal-row">
        <div className="modal-left">
          <div className="modal-left-column">
            <S.Exit type="button" onClick={handleModal}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </S.Exit>
            <h2>{itemInfo.item}</h2>
            <div className="modal-description">
              <p>{itemInfo.description}</p>
            </div>
            <div>
              <S.Button type="button">
                <FontAwesomeIcon icon={faMinusCircle} size="2x" />
              </S.Button>
              <span> 1 </span>
              <S.Button type="button">
                <FontAwesomeIcon icon={faPlusCircle} size="2x" />
              </S.Button>
            </div>
            <textarea placeholder="SPECIAL INSTRUCTIONS" rows="10" cols="50" />
          </div>
          <S.Add>Add to chart</S.Add>
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
  opacity: 0.75;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.5;
  }
`;
S.Exit = styled.button`
  color: #111;
  cursor: pointer;
  opacity: 0.75;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  float:left;
  margin-top:10px;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.5;
  }
`;
S.Add = styled.button`
  cursor: pointer;
  opacity: 0.75;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  background: rgb(76, 163, 175);;
  border: none;
  color:black;
  outline: none;
  box-shadow: none;
  &:focus {
    outline: 0;
  }
  font-size: 25px;
  &:hover {
    opacity: 0.5;
  }
`;
