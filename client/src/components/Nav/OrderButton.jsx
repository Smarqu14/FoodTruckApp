import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const OrderButton = () => (
  <NavLink to="/order">
    <li>
      <S.Button>Order Now!</S.Button>
    </li>
  </NavLink>
);

export default OrderButton;

const S = {};
S.Button = styled.a`
  color: white;
  font-size: 30px;
  height: 40px;
  max-width: 300px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 0px 2px rgba (0, 0, 0, 0.3);
  background: red;
  cursor: pointer;
  padding-top: 5px;

   &:focus {
    outline: 0;
  }

  &:hover {
    background: white;
    border: 1px solid red;
    color: red;
  }
`;
