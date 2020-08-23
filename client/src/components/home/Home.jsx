import React, { Component } from "react";
import styled from "styled-components";
import About from "../about/About";
import PopularSection from "./PopularSection";
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
                  <a href="#popular-items">
                    <Background__Button>Show me more</Background__Button>{" "}
                  </a>
                </Background__title>
              </Background__Content>
            </Background__Container>
            <About />
            <PopularSection images={images} />
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
