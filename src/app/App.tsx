import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeContainer} />
      </BrowserRouter>
    );
  }
}

export default App;
