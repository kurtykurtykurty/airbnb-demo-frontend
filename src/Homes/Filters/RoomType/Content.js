import React from "react";
import styled from "styled-components";
import Option from "./Option";

import home from "./home.svg";
import proom from "./proom.svg";
import sroom from "./sroom.svg";

export default function(props) {
  const { data, onFilterChanged } = props;

  const onOptionChange = (id, value) => {
    onFilterChanged({ ...data, [id]: value });
    console.log("DATA ID", [id], value);
  };

  return (
    <div>
      <Option
        id="entrie"
        onChange={onOptionChange}
        typeroom="Entrie Home"
        descr="Have a place to yourself"
        roomimg={home}
        isActive={data.entrie}
      />

      <Option
        id="private"
        onChange={onOptionChange}
        typeroom="Private room"
        descr="Have your own room and share some common spaces"
        roomimg={proom}
        isActive={data.private}
      />

      <Option
        id="shared"
        onChange={onOptionChange}
        typeroom="Shared room"
        descr="Stay in a shared space, like a common room"
        roomimg={sroom}
        isActive={data.shared}
      />
    </div>
  );
}
