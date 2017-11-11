import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import { media } from "../media.js";

const Header = styled.header`
  display: flex;
  height: 80px;
  align-items: center;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);

  background: rgba(255, 0, 0, 0.5);

  ${media.md`
    background: rgba(0, 255, 0, 0.5);
  `};

  ${media.lg`
    background: rgba(0, 0, 255, 0.5);
  `};
`;

const HeadContainerLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeadContainerRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.img`margin: 0px 50px 0px 0px;`;

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
export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <HeadContainerLeft>
              <Logo src={logo} />
              <InputSearch />
            </HeadContainerLeft>
          </div>

          <div className="col-lg-6">
            <HeadContainerRight>
              <Button>Become a host</Button>
              <Button>Help</Button>
              <Button>Sign Up</Button>
              <Button>Log In</Button>
            </HeadContainerRight>
          </div>
        </div>
      </div>
    </Header>
  );
}
