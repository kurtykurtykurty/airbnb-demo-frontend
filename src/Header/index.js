import React from "react";
import logo from "./logo.svg";
import arr from "./arr.png";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import { media } from "../media";

const Header = styled.header`
  ${"" /* height: 100%; */} width :100%;
  align-items: center;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 16px 0;
  ${"" /* margin-bottom: 40px; */} background: #ffffff;
  position: fixed;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Right = styled.div`
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  display: none;

  ${media.lg`
    display: flex;
  `};
`;

const Logo = styled.img`
  margin: 0px 8px 0px 0px;
  ${media.lg`
    margin: 0px 50px 0px 0px;  
  `};
`;
const Button = styled.button`
  line-height: 24px;
  text-align: center;
  color: #383838;
  background: #fff;
  font-family: CircularAir;
  font-size: 14px;
  border: 0;
  margin: 8px;
  padding: 0 4px 0 4px;
  font-weight: bold;
`;
const Arr = styled.img`
  margin: 0px 8px 0px 0px;
  ${media.lg`
  display: none;`};
`;
export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <Content>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
              <Left>
                <Logo src={logo} />
                <Arr src={arr} />
                <InputSearch />
              </Left>
            </div>
            <div className="col-lg-6">
              <Right>
                <Button>Become a host</Button>
                <Button>Help</Button>
                <Button>Sign Up</Button>
                <Button>Log In</Button>
              </Right>
            </div>
          </Content>
        </div>
      </div>
    </Header>
  );
}
