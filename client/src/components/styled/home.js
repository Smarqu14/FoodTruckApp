/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// ----------------------------
export const BackgroundImage = styled.div`
  background-image: url(https://freetablephotos.s3-us-west-1.amazonaws.com/mexican.jpg);
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;
export const Slogan = styled.div`
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const H1 = styled.h1`
  word-spacing: 4px;
  margin-top: 0;
  margin-bottom: 20px;
  color: #fff;
  font-size: 240%;
  letter-spacing: 1px;
`;
