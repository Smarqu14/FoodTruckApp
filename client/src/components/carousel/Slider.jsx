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
      image: 'https://freetablephotos.s3-us-west-1.amazonaws.com/11.jpg',
    };
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  prevImage() {
    const { images, currentIdx } = this.state;
    const lastIdx = images.length - 1;
    const resetIdx = currentIdx === 0;
    const idx = resetIdx ? lastIdx : currentIdx - 1;

    this.setState({
      currentIdx: idx,
    });
  }

  nextImage() {
    const { images, currentIdx } = this.state;
    const lastIdx = images.length - 1;
    const resetIdx = currentIdx === lastIdx;
    const idx = resetIdx ? 0 : currentIdx + 1;

    this.setState({
      currentIdx: idx,
    });
  }

  render() {
    return (
      <div className="slider">
        <LeftArrow />
        <img src={this.state.images[1]} />
        <RightArrow />
      </div>
    );
  }
}
