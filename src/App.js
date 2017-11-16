import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Homes from "./Homes";

import "./fonts/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Landing} />
            <Route path="/Homes" component={Homes} />
            <Route path="/" exact component={Footer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
