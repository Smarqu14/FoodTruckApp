import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Booking from "../../book/Booking";
import Hours from "../../hours/Hours";
import Home from "../../home/Home";
import Menu from "../../menu/Menu";
import Order from "../../order/Order";
import NoMatch from "../NoMatch";

const Routes = ({ data }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/catering" component={Booking} />
    <Route path="/hours" component={Hours} />
    <Route path="/order" component={Order} />
    <Route path="/menu" render={() => <Menu data={data} />} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;

Routes.propTypes = {
  data: PropTypes.array,
};

Routes.defaultProps = {
  data: [],
};
