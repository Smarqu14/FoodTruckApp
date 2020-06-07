/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export default class Map extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    const MapGoogle = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 37.6547, lng: 122.4077 }}
        defaultZoom={13}
      />
    ));
    return (
      <div>
        <MapGoogle
          containerElement={<div style={{ height: '500px', width: '500px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}
