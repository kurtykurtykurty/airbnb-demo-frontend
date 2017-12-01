import React from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Rooms from "./Rooms";

export default () => (
  <div>
    <Route path="/homes" exact component={List} />
    <Route path="/homes/:id" exact component={Rooms} />
  </div>
);
