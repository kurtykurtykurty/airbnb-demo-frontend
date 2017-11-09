import React, { Component } from "react";
import Header from "./Header/Header";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences";
import Home from "./Homes/Homes";
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
      </div>
    );
  }
}

export default App;
