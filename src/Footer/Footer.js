import React from "react";
import styled from "styled-components";
import cur from "./cur.svg";
import logo from "./logo.svg";
import face from "./face.svg";
import twit from "./twitter.svg";
import inst from "./inst.svg";

const Footer = styled.footer`box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);`;
const Socle = styled.div`padding: 48px 0 48px 0;`;
const Select = styled.select`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  font-size: 18px;
  font-weight: 200;
  line-height: 21px;
  outline: none;
  padding: 12px 0 13px 16px;
  width: 100%;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  margin-bottom: 16px;
  appearance: none;
  outline: none;
  background-image: url(${cur});
  background-position: 93% center;
  background-repeat: no-repeat;
  margin-bottom: 16px;
`;
const Option = styled.option`font-size: 18px;`;

const LinksTitle = styled.div`
  text-align: left;
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #383838;
  font-weight: bold;
  padding: 0 0 8px 0;
`;
const Links = styled.div`
  text-align: left;
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #636363;
  padding: 8px 0 8px 0;
`;
const Basement = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 25px 0 25px 0;
`;

const BasementLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const BasementRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Logo = styled.img`margin: 0px 15px 0px 0px;`;
const Copyright = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #636363;
`;
const Button = styled.button`
  line-height: 24px;
  text-align: center;
  color: #636363;
  background: #fff;
  font-family: CircularAir;
  font-size: 14px;
  border: 0;
  margin: 8px;
  padding: 0 8px 0 8px;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
`;
const Face = styled.img`margin: 0 6px 0 6px;`;
const Twit = styled.img`margin: 0 6px 0 6px;`;
const Inst = styled.img`margin: 0 6px 0 6px;`;
export default function() {
  return (
    <Footer>
      <Socle>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Select>
                <Option>English</Option>
                <Option>Русский</Option>
              </Select>
              <Select>
                <Option>United States dollar</Option>
                <Option>Рубли</Option>
              </Select>
            </div>
            <div className="offset-1" />
            <div className="col-2">
              <LinksTitle>Airbnb</LinksTitle>
              <Links>About us</Links>
              <Links>Careers</Links>
              <Links>Press</Links>
              <Links>Policies</Links>
              <Links>Help</Links>
              <Links>About Diversity</Links>
            </div>
            <div className="offset-1" />
            <div className="col-2">
              <LinksTitle>Discover</LinksTitle>
              <Links>Trust & Safety</Links>
              <Links>Travel Credit</Links>
              <Links>Gift Cards</Links>
              <Links>Airbnb Citizen</Links>
              <Links>Business Travel</Links>
              <Links>Guidebooks</Links>
              <Links>Airbnbmag</Links>
            </div>
            <div className="offset-1" />
            <div className="col-2">
              <LinksTitle>Hosting</LinksTitle>
              <Links>Why Host</Links>
              <Links>Hospitality</Links>
              <Links>Responsible Hosting</Links>
              <Links>Community Center</Links>
            </div>
          </div>
        </div>
      </Socle>
      <Basement>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <BasementLeft>
                <Logo src={logo} />
                <Copyright>© Airbnb Inc.</Copyright>
              </BasementLeft>
            </div>
            <div className="col-6">
              <BasementRight>
                <Button>Terms</Button>
                <Button>Privacy</Button>
                <Button>Site map</Button>
                <Social>
                  <Face src={face} />
                  <Twit src={twit} />
                  <Inst src={inst} />
                </Social>
              </BasementRight>
            </div>
          </div>
        </div>
      </Basement>
    </Footer>
  );
}
