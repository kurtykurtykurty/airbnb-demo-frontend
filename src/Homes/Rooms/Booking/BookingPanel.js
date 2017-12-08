import React from "react";
import styled from "styled-components";
import Price from "./Header";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
`;

const Wrapper = styled.div`
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;
  display: flex;
`;

const Request = styled.button`
  display: block;
  background: #ff5a5f;
  border-radius: 4px;
  border: none;
  padding: 9px 16px 10px 16px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`;

const Label = styled.div`
  font-family: CircularAir;
  color: #ffffff;
`;

export default props => (
  <Container className="hidden-xl hidden-lg">
    <div className="container">
      <Wrapper>
        <Price />
        <Request>
          <Label>Request to book</Label>
        </Request>
      </Wrapper>
    </div>
  </Container>
);
