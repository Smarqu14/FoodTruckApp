import React from "react";
import Fade from "react-reveal/Fade";

const PopularSection = ({ images }) => (
  <>
    <Fade left>
      <h1>
        <a id="popular-items"> Popular items</a>
      </h1>
      <section className="section-meals">
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meals-photo">
              <img
                src={images[0]}
                alt="Korean bibimbap with egg and vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src={images[1]}
                alt="Simple italian pizza with cherry tomatoes"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src={images[3]}
                alt="Chicken breast steak with vegetables "
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src={images[3]}
                alt="Chicken breast steak with vegetables "
              />
            </figure>
          </li>
        </ul>
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meals-photo">
              <img src={images[3]} alt="Paleo beef steak with vegetables" />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src={images[0]}
                alt="Healthy baguette with egg and vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img src={images[1]} alt="Burger with cheddar and bacon" />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src={images[1]}
                alt="Granola with cherries and strawberries"
              />
            </figure>
          </li>
        </ul>
      </section>
    </Fade>
    ;
  </>
);
export default PopularSection;
