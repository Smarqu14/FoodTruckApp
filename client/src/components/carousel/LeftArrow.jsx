import React from 'react';
import styled from 'styled-components';

const LeftArrow = ({ onClick }) => (
  <S.Button
    type="button"
    onClick={onClick}
  >
    <span className="fa fa-2x fa-angle-left" />
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

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: .5;
  }
`;
