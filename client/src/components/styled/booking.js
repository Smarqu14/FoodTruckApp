/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
position: absolute;
right: 0;
left: 0;
margin-right: auto;
margin-left: auto;
  width: 90%;
  margin-bottom: 100px;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  height: 650px;
  background: url(${(props) => props.backgroundImage}) no-repeat 0;
  background-size: cover;
  width: 100%;
`;
