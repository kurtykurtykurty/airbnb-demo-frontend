import React from "react";
import styled from "styled-components";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import DropContainer from "../DropContainer";
import { media } from "../../../media";
import "./style.css";
import MobileDayPicker from "./MobileDayPicker";

const Wrapper = styled(DropContainer)`
  width: 337px;
  z-index: 5;

  ${media.md`
    width: 337px;
`};

  ${media.lg`
    width: 637px;
`};
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
          <div className="hidden-xs hidden-sm hidden-md">
            <DayPickerRangeController
              hideKeyboardShortcutsPanel
              initialVisibleMonth={null}
              numberOfMonths={2}
              onOutsideClick={this.onOutsideClick}
              onPrevMonthClick={this.onPrevMonthClick}
              onNextMonthClick={this.onNextMonthClick}
            />
          </div>
          <div className="hidden-xs hidden-sm hidden-lg hidden-xl">
            <DayPickerRangeController
              hideKeyboardShortcutsPanel
              initialVisibleMonth={null}
              numberOfMonths={1}
              onOutsideClick={this.onOutsideClick}
              onPrevMonthClick={this.onPrevMonthClick}
              onNextMonthClick={this.onNextMonthClick}
            />
          </div>
          <div className="hidden-md hidden-lg hidden-xl">
            <MobileDayPicker
              onCancel={this.props.onCancel}
              orientation="verticalScrollable"
              hideKeyboardShortcutsPanel
              initialVisibleMonth={null}
              numberOfMonths={2}
              onOutsideClick={this.onOutsideClick}
              onPrevMonthClick={this.onPrevMonthClick}
              onNextMonthClick={this.onNextMonthClick}
            />
          </div>
        </Content>
      </Wrapper>
    );
  }
}
