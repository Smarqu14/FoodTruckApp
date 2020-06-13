/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import axios from 'axios';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import OrderButton from './OrderButton';
import data from '../../data/imagesData';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0,
      images: data,
    };
    this.handlePrevImage = this.handlePrevImage.bind(this);
    this.handleNextImage = this.handleNextImage.bind(this);
    this.setData = this.setData.bind(this);
    this.handleError = this.handleError.bind(this);
  }



  setData({ data }) {
    this.setState({ images: data });
  }

  handleError(error) {
    if (error) {
      console.error(error);
    } else {
      ('success');
    }
  }

  handlePrevImage() {
    const { images, currentIdx } = this.state;
    const lastIdx = images.length - 1;
    const resetIdx = currentIdx === 0;
    const idx = resetIdx ? lastIdx : currentIdx - 1;

    this.setState({
      currentIdx: idx,
    });
  }

  handleNextImage() {
    const { images, currentIdx } = this.state;
    const lastIdx = images.length - 1;
    const resetIdx = currentIdx === lastIdx;
    const idx = resetIdx ? 0 : currentIdx + 1;
    this.setState({
      currentIdx: idx,
    });
  }

  render() {
    const { images } = this.state;
    return (
      <>
        {images.length > 0 ? (
          <div className="banner">
            <section className="lp__grid-3">
              <div className="lp__grid__item lp__grid-col">
                <div className="textHolder">
                  <p>80,88,96,104,112,120,128,136,144,152,160,168,176</p>
                </div>
                <div className="lp__gridImage-1" />
                <div className="image " />
              </div>
              <div className="lp__grid__item">
                <div className="lp__subgrid lp__subgrid-sm">
                  <div>
                    <p>Food that will make you come back for more 🤤</p>
                    <p>This is amazing. THIS IS DELICIOUS.. </p>
                  </div>
                  <div className="lp__gridImage-2" />
                </div>
              </div>
              <div className="lp__grid__item">
                <div className="lp__subgrid lp__subgrid-md">
                  <h1>
                    <OrderButton />
                  </h1>
                  <div className="image lp__gridImage-3" />
                </div>
              </div>

            </section>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </>
    );
  }
}
