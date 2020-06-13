import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './nav/Navigation';
import Routes from './nav/routes/routes';

const App = ({ data }) => (
  <div>
    <Navigation />
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
