import React from "react";
import "./style.css";
import styled from "styled-components";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import DropContainer from "../DropContainer";

const Wrapper = styled(DropContainer)`
  width: 667px;
  z-index: 5;
`;

const Content = styled.div`
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 8px;
`;

export default class Filter extends React.Component {
  onOutsideClick = () => {};
  onPrevMonthClick = () => {};
  onNextMonthClick = () => {};

  render() {
    return (
      <Wrapper {...this.props}>
        <Content>
          <DayPickerRangeController
            hideKeyboardShortcutsPanel
            initialVisibleMonth={null}
            numberOfMonths={2}
            onOutsideClick={this.onOutsideClick}
            onPrevMonthClick={this.onPrevMonthClick}
            onNextMonthClick={this.onNextMonthClick}
          />
        </Content>
      </Wrapper>
    );
  }
}
