import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './nav/Navigation';


const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Switch>
        {/* <Route path="/" component={App} exact /> */}
        {/* <Route path="/home" component={home}/>
          <Route path="/hours" component={hours}/>
          <Route path="/booking" component={booking}/>
          <Route path="/order" component={order}/> */}
      </Switch>
    </div>
  </Router>
);

export default App;
