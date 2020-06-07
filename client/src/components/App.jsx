import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './nav/Navigation';
import Slider from './carousel/Slider';
import Map from './map/Map';


const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Slider />
      <Switch>
        {/* <Route path="/" component={App} exact /> */}
        {/* <Route path="/home" component={home}/>
          <Route path="/hours" component={hours}/>
          <Route path="/booking" component={booking}/>
          <Route path="/order" component={order}/> */}

      </Switch>
      {/* <Map /> */}
    </div>
  </Router>
);

export default App;
