import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

import List from "./List";

export default () => (
  <div>
    <Route path="/homes" exact component={List} />
  </div>
);
