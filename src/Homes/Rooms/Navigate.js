import React from "react";
import styled from "styled-components";

const Navigate = styled.div`
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  color: #0f7276;
  padding: 16px 0 15px 0;
`;

const Link = styled.button`
  border: none;
  background: #fff;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #0f7276;
  cursor: pointer;
`;

export default () => (
  <div className="container">
    <div className="col-lg-8">
      <Navigate>
        <Link>Overview</Link> ·
        <Link>Reviews</Link> ·
        <Link>The Host</Link> ·
        <Link>Location</Link>
      </Navigate>
    </div>
  </div>
);
