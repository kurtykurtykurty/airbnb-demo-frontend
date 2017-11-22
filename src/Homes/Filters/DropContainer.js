import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  text-align: center;
  overflow-wrap: break-word;
  width: 326px;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  z-index: 2;
  top: calc(100% - 4px);
`;

const Button = styled.button`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #008489;
  border: none;
  cursor: pointer;
  padding: 22px 30px;
  background: #fff;
`;

const CancelButton = styled(Button)`color: #636363;`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default props => (
  <Container className={props.className}>
    {props.children}
    <Footer>
      <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
      <Button>Apply</Button>
    </Footer>
  </Container>
);
