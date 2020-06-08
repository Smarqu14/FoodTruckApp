import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './data/dummyData';


ReactDOM.render(<App data={data} />, document.getElementById('app'));
