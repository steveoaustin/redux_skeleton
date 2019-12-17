import React, { Component } from "react";
import { Route } from "react-router";
import HomeContainer from "./home/HomeContainer";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={HomeContainer} />
      </>
    );
  }
}
