import React from 'react';
import styled from 'styled-components';

const OrderButton = () => <Button type="button">Order Now</Button>;

export default OrderButton;

const Button = styled.button`
  box-shadow: 1px 1px 0px 2px rgba (0, 0, 0, 0.3);
  cursor: pointer;
  color: white;
  font-size: 16px;
  border: 0.3em solid red;
  border-radius: 0.8em;
  width: 12em;
  height: 3em;
  background: red;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 2em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  margin: 1em;

  &:focus {
    outline: 0;
  }
  &:hover {
    background: white;
    border: 1px solid red;
    color: red;
  }
`;
