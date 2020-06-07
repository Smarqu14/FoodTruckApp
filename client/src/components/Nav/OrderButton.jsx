import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const OrderButton = ({ tolink, active, item }) => (
  <li className="item active">
    <NavLink to={tolink} onClick={active}>
      <S.Button>{item}</S.Button>
    </NavLink>
  </li>
);

export default OrderButton;

const S = {};
S.Button = styled.div`
  color: white;
  font-size: 20px;
  height: 40px;
  max-width: 150px !important;
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
