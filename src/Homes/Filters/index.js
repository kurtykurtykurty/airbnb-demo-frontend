import React from "react";
import styled from "styled-components";

const Filters = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eaebf0;
  background: white;
  margin-top: 82px;
  position: fixed;
  ${"" /* z-index: 1; */};
`;

const Button = styled.button`
  box-sizing: border-box;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
  padding: 7px 16px;
  background: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  cursor: pointer;
  margin-right: 12px;
`;

export default function() {
  return (
    <Filters>
      <div className="container">
        <div class="row">
          <Button>Dates</Button>
          <Button>Guests</Button>
          <Button>Room type</Button>
          <Button>Price</Button>
          <Button>Instant book</Button>
          <Button>More filters</Button>
        </div>
      </div>
    </Filters>
  );
}
