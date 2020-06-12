import React from 'react';
import Navigation from './nav/Navigation';
import Routes from './nav/routes/routes';

const App = ({ data }) => (
  <div className="App">
    <Navigation />
    <Routes data={data} />
  </div>
);

export default App;
