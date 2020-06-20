/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import styled from 'styled-components';
import About from '../about/About';
import OrderButton from './OrderButton';
import { data } from '../../data/imagesData';
import {
  Wrapper,
  Section,
  ImageDiv,
  ImageDivTwo,
  ImageDivThree,
  Griditem,
  Paragraph,
  Paragraph2,
} from '../styled/home';

const BackgroundImage = styled.div`
  background-image: url("https://freetablephotos.s3-us-west-1.amazonaws.com/mexican.jpg");
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;
const Slogan = styled.div`
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const H1 = styled.h1`
  word-spacing: 4px;
  margin-top: 0;
  margin-bottom: 20px;
  color: #fff;
  font-size: 240%;
  letter-spacing: 1px;
`;

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
                {' '}
                Delicious, Mobile, and Authentic?
                <br />
                Authentic Mexican Food.
              </H1>
              <a href="#" className="btn btn-full">
                I’m hungry
              </a>
              <a href="#" className="btn btn-ghost">
                Show me more
                {' '}
              </a>
            </Slogan>
            <About />
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
            {/* <Griditem className="lp__grid-col">
                  <div className="textHolder">
                    <Paragraph>
                      80,88,96,104,112,120,128,136,144,152,160,168,176
                    </Paragraph>
                  </div>
                  <ImageDiv
                    onClick={this.handleFirstImage}
                    backgroundImage={images[currentIdx]}
                  />
                </Griditem>
                <Griditem>
                  <div className="lp__subgrid lp__subgrid-sm">
                    <div>
                      <Paragraph2>
                        {' '}
                        Food that will make you come back for more.This is
                        amazing. THIS IS DELICIOUS..
                        {' '}
                      </Paragraph2>
                    </div>
                    <ImageDivTwo backgroundImage={images[1]} />
                  </div>
                </Griditem>
                <Griditem>
                  <div className="lp__subgrid lp__subgrid-md">
                    <h1>
                      <span>
                        <OrderButton />
                      </span>
                    </h1>
                    <ImageDivThree backgroundImage={images[0]} />
                  </div>
                </Griditem> */}
            {/* </Section>
            </Wrapper> */}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </>
    );
  }
}
