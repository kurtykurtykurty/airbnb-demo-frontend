import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  text-align: center;
  overflow-wrap: break-word;
  width: 326px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const Options = styled.div`padding: 10px 16px 0 16px;`;

const Button = styled.button`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #008489;
  border: none;
  cursor: pointer;
  padding: 22px 30px;
  background: #fff;
`;

const CButton = styled(Button)`color: #636363;`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default props => (
  <Container>
    <Options>{props.children}</Options>
    <Footer>
      <CButton>Cancel</CButton>
      <Button>Apply</Button>
    </Footer>
  </Container>
);
