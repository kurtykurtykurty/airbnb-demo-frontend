import React from "react";
import styled from "styled-components";
import Views from "../Booking/Views";

const Container = styled.div`
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
  padding: 16px 32px 18px 24px;
  margin-bottom: 24px;
`;

export default props => (
  <Container className={props.className}>
    <Views />
  </Container>
);
