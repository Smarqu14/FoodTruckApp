import React, { Component } from 'react';
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
    const {
      images, currentIdx,
    } = this.state;
    return (
      <>
        {images.length > 0 ? (
          <Wrapper>
            <Section>
              <Griditem className="lp__grid-col">
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
              </Griditem>
            </Section>
          </Wrapper>
        ) : (
          <p>Loading</p>
        )}
      </>
    );
  }
}
