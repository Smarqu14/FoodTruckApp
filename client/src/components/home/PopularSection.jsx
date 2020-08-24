import React from "react";
import OrderButton from "./OrderButton";

import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Section__Container = styled.section`
  padding: 0;
`;

const Section__List = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Section__Figure = styled.figure`
  width: 100%;
  margin: 0;
  overflow: hidden;
  background-color: #000;

  img {
    width: 100%;
    transform: scale(1.15);
    transition: transform 0.2s, opacity 0.2s;
    opacity: 0.7;
    height: 300px;

    &:hover {
      transform: scale(1.03);
      opacity: 1;
    }
  }
`;

const PopularSection = ({ images }) => {
  const imagesAltOne = [
    "Korean bibimbap with egg and vegetables",
    "Simple italian pizza with cherry tomatoes",
    "Chicken breast steak with vegetables",
    "Chicken breast steak with vegetables ",
  ];

  const itemLists = images.map((img, index) => {
    return (
      <li>
        <Section__Figure>
          <img src={img} alt={imagesAltOne[index]} />
        </Section__Figure>
      </li>
    );
  });

  return (
    <>
      <Fade left>
        <OrderButton />
        <Section__Container>
          <Section__List>{itemLists}</Section__List>
          <Section__List>{itemLists}</Section__List>
        </Section__Container>
      </Fade>
      ;
    </>
  );
};

export default PopularSection;
