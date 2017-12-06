import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 23px;
  padding-bottom: 23px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
`;

const Title = styled.h3`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  margin: 0px;
  margin-bottom: 16px;
`;

export default props => (
  <div className="container">
    <div className="col-xs-12 col-lg-8">
      <Section>
        <Title>{props.title}</Title>
        {props.children}
      </Section>
    </div>
  </div>
);
