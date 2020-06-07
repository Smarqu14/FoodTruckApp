import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0,
      images: [
        'https://freetablephotos.s3-us-west-1.amazonaws.com/11.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/10.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/1.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/2.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/3.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/4.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/5.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/6.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/7.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/8.jpg',
        'https://freetablephotos.s3-us-west-1.amazonaws.com/9.jpg',
      ],
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
      <div className="slider">
        <LeftArrow onClick={this.handlePrevImage} />
        <img src={images[currentIdx]} alt="food images" />
        <RightArrow onClick={this.handleNextImage} />
      </div>
    );
  }
}
