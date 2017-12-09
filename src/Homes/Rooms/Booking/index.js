import React from "react";
import BookingMenu from "./BookingMenu";
import { Sticky } from "react-sticky";

const navHeight = 72;

function Booking({ isSticky, style }) {
  return (
    <div style={{ ...style, paddingTop: isSticky ? navHeight : 24 }}>
      <BookingMenu />
    </div>
  );
}

export default () => <Sticky topOffset={-48}>{Booking}</Sticky>;
