import React, { Component } from "react";
import About from "../about/About";
import PopularSection from "./PopularSection";

import { data } from "../../data/imagesData";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import {
  Background__H1,
  Background__Button,
  Background__Container,
  Background__Imagecontainer,
  Background__Content,
  Background__title,
} from "../styled/home";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: data,
    };
  }

  render() {
    const { images } = this.state;
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
