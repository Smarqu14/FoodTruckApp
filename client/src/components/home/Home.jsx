import React, { Component } from 'react';
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
    const { images, currentIdx } = this.state;
    return (
      <div>
        <div className="banner">
          <LeftArrow handlePrevImage={this.handlePrevImage} />
          <img src={images[currentIdx]} alt="food images" />
          <RightArrow handleNextImage={this.handleNextImage} />
          <div className="image_order_btn">
            <OrderButton />
          </div>
        </div>

        <div className="banner">
          <h1>About us</h1>
          <p>
            We are a taco truck that deliveres quality food and a great
            experience. Food as it should be. Food should taste good. It should
            feel good. It should do good things for you and the world around
            you.
          </p>
          <img src={images[6]} alt="food images" />
          <div className="image_order_btn">
            <OrderButton />
          </div>

          <div className="banner">
            <h1>Catering</h1>
            <p>
              We are a taco truck that deliveres quality food and a great
              experience. Food as it should be. Food should taste good. It
              should feel good. It should do good things for you and the world
              around you.
            </p>
            <img src={images[7]} alt="food images" />
            <div className="image_order_btn">
              <OrderButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
