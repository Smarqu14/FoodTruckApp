import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from './nav/Navigation';
import Routes from './nav/routes/routes';

const FixedBackgroundImage = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 60px;
  z-index: 2;
  background-image: url(https://freetablephotos.s3-us-west-1.amazonaws.com/tomatos2.png);
`;

const App = ({ data }) => (
  <div>
    <Navigation />
    <FixedBackgroundImage />
    <Routes data={data} />
  </div>
);

export default App;

App.propTypes = {
  data: PropTypes.array,
};

App.defaultProps = {
  data: [],
};
