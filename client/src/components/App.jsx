import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navigation from "./nav/Navigation";
import Routes from "./nav/routes/routes";

const App = ({ data }) => (
  <React.Fragment>
    <Navigation />
    <Routes data={data} />
    {/* <footer className="app__footer"></footer> */}
  </React.Fragment>
);

export default App;

App.propTypes = {
  data: PropTypes.array,
};

App.defaultProps = {
  data: [],
};
