import React from "react";

import CheckBoxFilter, { Option } from "./CheckBoxFilter";

export default function(props) {
  return (
    <CheckBoxFilter seeAll="See all facilities">
      <Option
        label="Elevator"
        onChange={props.onFilterChanged}
        isActive={props.data.elevator}
        id="elevator"
      />
      <Option
        label="Free parking on premises"
        onChange={props.onFilterChanged}
        isActive={props.data.parking}
        id="parking"
      />
      <Option
        label="Pool"
        onChange={props.onFilterChanged}
        isActive={props.data.pool}
        id="pool"
      />
      <Option
        label="Wheelchair accessible"
        onChange={props.onFilterChanged}
        isActive={props.data.accessible}
        id="accessible"
      />
    </CheckBoxFilter>
  );
}
