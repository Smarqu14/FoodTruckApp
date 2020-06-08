import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Navigation from './nav/Navigation';
import Home from './home/Home';
// import Map from './map/Map';
// import ProductList from './menu/ProductList';
import Menu from './menu/Menu';
import Hours from './hours/Hours';
import Booking from './book/Booking';
import Order from './order/Order';

const App = ({ data }) => (
  <BrowserRouter>
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          path="/menu"
          // render={(props) => <ProductList {...props} data={data} />}
          render={(props) => <Menu {...props} data={data} />}
        />
        <Route path="/" component={Home} exact />
        <Route path="/hours" component={Hours} exact />
        <Route path="/booking" component={Booking} exact />
        <Route path="/order" component={Order} exact />
        <Redirect to="/" />
      </Switch>
      {/* <Map /> */}
    </div>
  </BrowserRouter>
);

export default App;
