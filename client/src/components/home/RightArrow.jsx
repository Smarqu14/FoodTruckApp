import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const RightArrow = ({ handleNextImage }) => (
  <S.Button
    type="button"
    onClick={handleNextImage}
  >
    <FontAwesomeIcon icon={faAngleRight} size="2x" />
  </S.Button>
);

export default RightArrow;

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
  right: 32px;
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
