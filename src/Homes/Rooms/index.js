import React from "react";
import Header from "./Header";
import MainHeader from "../../Header";
import Navigate from "./Navigate";

export default () => (
  <div>
    <MainHeader />
    <Header />
    <Navigate />
    <div className="container">
      <h1>Кабан</h1>
      <h2>Ты ебанулся</h2>
      <h3>Что ты там делаешь?</h3>
    </div>
  </div>
);
