import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 23px;
  padding-bottom: 23px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
`;

export default props => (
  <div className="container">
    <div className="col-xs-12 col-lg-8">
      <Section>{props.children}</Section>
    </div>
  </div>
);
