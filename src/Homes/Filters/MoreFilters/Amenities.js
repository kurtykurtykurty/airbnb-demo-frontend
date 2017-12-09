import React from "react";

import CheckBoxFilter, { Option } from "./CheckBoxFilter";

export default function(props) {
  return (
    <CheckBoxFilter seeAll="See all amenities">
      <Option
        label="Heating"
        onChange={props.onFilterChanged}
        isActive={props.data.heating}
        id="heating"
      />
      <Option
        label="Kitchen"
        onChange={props.onFilterChanged}
        isActive={props.data.kitchen}
        id="kitchen"
      />
      <Option
        label="TV"
        onChange={props.onFilterChanged}
        isActive={props.data.tv}
        id="tv"
      />
      <Option
        label="Wireless Internet"
        onChange={props.onFilterChanged}
        isActive={props.data.wireless}
        id="wireless"
      />
    </CheckBoxFilter>
  );
}
