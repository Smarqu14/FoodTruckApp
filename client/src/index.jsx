import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import data from './data/dummyData';

ReactDOM.render(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>, document.getElementById('app'),
);
