import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


const LeftArrow = ({ handlePrevImage }) => (
  <S.Button
    type="button"
    onClick={handlePrevImage}
  >
    <span>
      <FontAwesomeIcon icon={faAngleLeft} size="2x" />
    </span>
  </S.Button>
);

export default LeftArrow;

const S = {};
S.Button = styled.button`
  position: absolute;
  top: 50%;
  display: block;
  color: #111;
  cursor: pointer;
  opacity: .75;
  transform: translateY(-50%);
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);
  left: 32px;
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
