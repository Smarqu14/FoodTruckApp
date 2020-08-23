/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

// ----------------------------
export const Background__H1 = styled.h1`
  word-spacing: 4px;
  margin-top: 0;
  margin-bottom: 20px;
  color: #fff;
  font-size: 240%;
  letter-spacing: 1px;
`;

export const Background__Container = styled.figure`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;
export const Background__Imagecontainer = styled.div`
  flex: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  display: block;
  background-image: url(https://freetablephotos.s3-us-west-1.amazonaws.com/mexican.jpg);
`;

export const Background__Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Background__title = styled.div`
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Background__Button = styled.button`
  box-shadow: 1px 1px 0px 2px rgba (0, 0, 0, 0.3);
  cursor: pointer;
  color: white;
  font-size: 16px;
  margin: 1em;
  padding: 0.25em 1em;
  background: darkgreen;

  border: 0.3em solid green;
  border-radius: 0.8em;
  font-weight: 300;
  width: 12em;
  height: 3em;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  line-height: 2em;
  letter-spacing: 0.1em;
  position: relative;
  overflow: hidden;
  transition: 0.5s;

  &:focus {
    outline: 0;
  }
  &:hover {
    background: transparent;
    border: 1px solid green;
    color: color;
  }
`;
