import React from 'react';
import styled from 'styled-components';

const OrderButton = ({ onClick }) => (
  <S.Button type="button" onClick={onClick}>
    Order Now
  </S.Button>
);

export default OrderButton;

const S = {};
S.Button = styled.button`
  position: absolute;
  top: 85%;
  color: white;
  font-size: 18px;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 0px 2px rgba (0, 0, 0, 0.3);
  background: red;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: white;
    border: 1px solid red;
    color: red;
  }
`;
