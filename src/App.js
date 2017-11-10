import React, { Component } from "react";
import Header from "./Header/Header";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences";
import Home from "./Homes/Homes";
import Food from "./Food/Food";
import Destinations from "./Destinations/Destinations";
import "./App.css";
import "./fonts/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
        <Experiences />
        <Home />
        <Food />
        <Destinations />
      </div>
    );
  }
}

export default App;
