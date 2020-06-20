import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Booking from '../../book/Booking';
import Hours from '../../hours/Hours';
import Home from '../../home/Home';
import Menu from '../../menu/Menu';
import Order from '../../order/Order';

const Routes = ({ data }) => (
  <Switch>
    <Route exact path="/" component={Home} exact={true} />
    <Route path="/catering" component={Booking} />
    <Route path="/hours" component={Hours} />
    <Route path="/order" component={Order} />
    <Route path="/menu" render={() => <Menu data={data} />} />
  </Switch>
);

export default Routes;

Routes.propTypes = {
  data: PropTypes.array,
};

Routes.defaultProps = {
  data: [],
};
