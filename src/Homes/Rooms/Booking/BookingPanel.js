import React from "react";
import styled from "styled-components";
import Price from "./Price";
import BookingMenuBase from "./BookingMenu";
import { media } from "../../../media";

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

const ModalView = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.8);
`;

const ModalContainer = styled.div`
  width: 368px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;

const CloseField = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BookingMenu = styled(BookingMenuBase)`
  border-radius: 4px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;

  ${media.md`
    position: static;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  `};
`;

class Booking extends React.Component {
  state = {
    openedBooking: false
  };

  openBooking = () => {
    this.setState({ openedBooking: true });
  };

  closeBooking = () => {
    this.setState({ openedBooking: false });
  };

  render() {
    return (
      <div>
        <Request>
          <Label onClick={this.openBooking}>Request to book</Label>
        </Request>
        {this.state.openedBooking && (
          <ModalView>
            <CloseField onClick={this.closeBooking} />
            <ModalContainer>
              <BookingMenu onClose={this.closeBooking} />
            </ModalContainer>
          </ModalView>
        )}
      </div>
    );
  }
}

export default props => (
  <Container className="hidden-xl hidden-lg">
    <div className="container">
      <Wrapper>
        <Price />
        <Booking />
      </Wrapper>
    </div>
  </Container>
);
