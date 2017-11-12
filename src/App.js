import React, { Component } from "react";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Home from "./Homes";
import Food from "./Food";
import Destinations from "./Destinations";
import Footer from "./Footer";
import "./fonts/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Explore />
        <Experiences />
        <Home />
        <Food />
        <Destinations />
        <Footer />
      </div>
    );
  }
}

export default App;
