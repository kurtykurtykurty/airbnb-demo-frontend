import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding-top: 15px;
  padding-bottom: 16px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
`;

const Report = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #0f7276;
  cursor: pointer;
`;

export default () => (
  <div className="container">
    <div className="hidden-lg hidden-xl">
      <Section>
        <Report>Report this listing</Report>
      </Section>
    </div>
  </div>
);
