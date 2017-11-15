import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";

import "./fonts/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
