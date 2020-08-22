import React, { Component } from "react";
import styled from "styled-components";
import About from "../about/About";
import OrderButton from "./OrderButton";
import { data } from "../../data/imagesData";
import {
  Background__H1,
  Background__Button,
  Background__Container,
  Background__Imagecontainer,
  Background__Content,
  Background__title,
} from "../styled/home";
import { Link } from "react-router-dom";

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
            <Background__Container>
              <Background__Imagecontainer />
              <Background__Content>
                <Background__title>
                  <Background__H1>
                    {" "}
                    Delicious, Mobile, and Authentic?
                    <br />
                    Authentic Mexican Food.
                  </Background__H1>
                  <Link to="/menu">
                    <Background__Button>I am hungry</Background__Button>{" "}
                  </Link>{" "}
                  <Link to="#">
                    <Background__Button>Show me more</Background__Button>{" "}
                  </Link>
                </Background__title>
              </Background__Content>
            </Background__Container>

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

// <Slogan>
//   <H1>
//     {" "}
//     Delicious, Mobile, and Authentic?
//     <br />
//     Authentic Mexican Food.
//   </H1>
//   <ButtonContainer>
//     <Link to="/contact">
//       <button>I am hungry</button>
//     </Link>
//     <Link to="/menu">
//       <button>Show me more</button>
//     </Link>
//   </ButtonContainer>
//   {/* <a href="#" className="btn btn-full">
//     I’m hungry
//   </a>
//   <a href="/menu" className="btn btn-ghost">
//     Show me more{" "}
//   </a> */}
// </Slogan>
