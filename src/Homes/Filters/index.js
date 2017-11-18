import React from "react";
import styled from "styled-components";
import RoomType from "./RoomType";
import Dates from "./Dates";

const Filters = styled.div`
  width: 100%;
  border-bottom: 1px solid #eaebf0;
  border-top: 1px solid #eaebf0;
  background: white;
  position: fixed;
  top: 82px;
  left: 0px;
  z-index: 2;
`;

const ButtonWrapper = styled.div`
  displa: flex;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const ButtonRow = styled.div`display: flex;`;

const Button = styled.button`
  box-sizing: border-box;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: ${props => (props.isPressed ? "white" : "#383838")};
  padding: 7px 16px;
  background: ${props => (props.isPressed ? "#008489" : "white")};
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  cursor: pointer;
  margin-right: 12px;
  z-index: 42;
`;

const Field = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

class Dropdown extends React.Component {
  state = {
    isOpenRoomType: false,
    isOpenDates: false,
    isOpenGuests: false,
    isOpenPrice: false,
    isOpenInstantBook: false,
    isOpenMoreFilters: false
  };

  closeFilters = () => {
    this.setState({
      isOpenRoomType: false,
      isOpenDates: false,
      isOpenGuests: false,
      isOpenPrice: false,
      isOpenInstantBook: false,
      isOpenMoreFilters: false
    });
  };

  toggleOpenRoomType = () => {
    this.setState({ isOpenRoomType: true });
  };

  toggleOpenDates = () => {
    this.setState({ isOpenDates: true });
  };

  toggleOpenGuests = () => {
    this.setState({ isOpenGuests: true });
  };

  toggleOpenPrice = () => {
    this.setState({ isOpenPrice: true });
  };

  toggleOpenInstantBook = () => {
    this.setState({ isOpenInstantBook: true });
  };

  toggleOpenMoreFilters = () => {
    this.setState({ isOpenMoreFilters: true });
  };

  onCancel = () => {
    this.closeFilters();
  };

  getDatesButtonLabel = () => {
    return this.state.isOpenDates ? "Check in — Check out " : "Dates";
  };

  render() {
    return (
      <ButtonRow>
        <ButtonWrapper>
          <Button
            onClick={this.toggleOpenDates}
            isPressed={this.state.isOpenDates}
          >
            {this.getDatesButtonLabel()}
          </Button>
          {this.state.isOpenDates && <Dates onCancel={this.onCancel} />}
        </ButtonWrapper>

        <ButtonWrapper>
          <Button
            onClick={this.toggleOpenGuests}
            isPressed={this.state.isOpenGuests}
          >
            Guests
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button
            className="hidden-xs hidden-sm hidden-md"
            onClick={this.toggleOpenRoomType}
            isPressed={this.state.isOpenRoomType}
          >
            Room type
          </Button>
          {this.state.isOpenRoomType && <RoomType onCancel={this.onCancel} />}
        </ButtonWrapper>

        <ButtonWrapper>
          <Button
            className="hidden-xs hidden-sm hidden-md"
            onClick={this.toggleOpenPrice}
            isPressed={this.state.isOpenPrice}
          >
            Price
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button
            className="hidden-xs hidden-sm hidden-md"
            isPressed={this.state.isOpenInstantBook}
            onClick={this.toggleOpenInstantBook}
          >
            Instant book
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button
            onClick={this.toggleOpenMoreFilters}
            isPressed={this.state.isOpenMoreFilters}
          >
            More filters
          </Button>
        </ButtonWrapper>
        {(this.state.isOpenRoomType ||
          this.state.isOpenDates ||
          this.state.isOpenGuests ||
          this.state.isOpenInstantBook ||
          this.state.isOpenMoreFilters ||
          this.state.isOpenPrice) && <Field onClick={this.closeFilters} />}
      </ButtonRow>
    );
  }
}

export default function(props) {
  return (
    <Filters>
      <div className="container">
        <Dropdown />
      </div>
    </Filters>
  );
}
