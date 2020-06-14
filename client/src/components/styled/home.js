/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// -------------Home.jsx-----------
export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  margin-bottom: 100px;
  margin-top: 100px;

`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 75px 0px;
  /* padding: 75px; */
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;
`;

export const Griditem = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 35px;
`;

export const ImageDiv = styled.div`
  height: 580px;
  background: url(${(props) => props.backgroundImage}) no-repeat -300px;
  background-size: cover;
  width: 400px;
`;
export const ImageDivTwo = styled.div`
  background: url(${(props) => props.backgroundImage});
  no-repeat right;
  background-size: cover;
`;

export const ImageDivThree = styled.div`
  background: url(${(props) => props.backgroundImage});
  no-repeat center;
  background-size: cover;
`;

export const Paragraph = styled.p`
  transform: rotate(270deg);
  height: 24px;
  margin: 0;
  position: absolute;
  bottom: 130px;
  left: -130px;
  font-size: 15px;
  position: absolute;
`;

export const Paragraph2 = styled.p`
line-height: 1.4;
padding: 0;
margin: 0;
font-size: 15px;
color: black;
`;

export const ImageTwoContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 72px auto;
`;


// ----------------------------
