import React, { Component } from "react";
import styled from "styled-components";
import About from "../about/About";
import OrderButton from "./OrderButton";
import { data } from "../../data/imagesData";
import { BackgroundImage, Slogan, H1 } from "../styled/home";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0,
      images: data,
    };
    this.handleFirstImage = this.handleFirstImage.bind(this);
  }

  handleFirstImage() {
    const { images, currentIdx } = this.state;
    const lastIdx = images.length - 1;
    const resetIdx = currentIdx === 0;
    const idx = resetIdx ? lastIdx : currentIdx - 1;

    this.setState({
      currentIdx: idx,
    });
  }

  render() {
    const { images, currentIdx } = this.state;
    return (
      <>
        {images.length > 0 ? (
          <div>
            <BackgroundImage />
            <Slogan>
              <H1>
                {" "}
                Delicious, Mobile, and Authentic?
                <br />
                Authentic Mexican Food.
              </H1>
              <a href="#" className="btn btn-full">
                I’m hungry
              </a>
              <a href="#" className="btn btn-ghost">
                Show me more{" "}
              </a>
            </Slogan>
            <About />
            <OrderButton />
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
                    <img
                      src={images[3]}
                      alt="Paleo beef steak with vegetables"
                    />
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
          </div>
        ) : (
          <p>Loading</p>
        )}
      </>
    );
  }
}
