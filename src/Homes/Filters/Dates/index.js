import React from "react";
import styled from "styled-components";
import moment from "moment";
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

export default props => (
  <Wrapper {...props}>
    <Content>
      <div className="hidden-xs hidden-sm hidden-md">
        <DayPickerRangeController
          startDate={props.startDate}
          endDate={props.endDate}
          onFocusChange={props.onFocusChange}
          onFocus={props.onFocus}
          focusedInput={props.focusedInput}
          onDatesChange={props.onDatesChange}
          isDayBlocked={day => day.isBefore(moment(), "day")}
          hideKeyboardShortcutsPanel
          initialVisibleMonth={null}
          numberOfMonths={2}
        />
      </div>
      <div className="hidden-xs hidden-sm hidden-lg hidden-xl">
        <DayPickerRangeController
          startDate={props.startDate}
          endDate={props.endDate}
          onFocusChange={props.onFocusChange}
          onFocus={props.onFocus}
          focusedInput={props.focusedInput}
          onDatesChange={props.onDatesChange}
          isDayBlocked={day => day.isBefore(moment(), "day")}
          hideKeyboardShortcutsPanel
          initialVisibleMonth={null}
          numberOfMonths={1}
        />
      </div>
      <div className="hidden-md hidden-lg hidden-xl">
        <MobileDayPicker
          startDate={props.startDate}
          endDate={props.endDate}
          onFocusChange={props.onFocusChange}
          onFocus={props.onFocus}
          focusedInput={props.focusedInput}
          onDatesChange={props.onDatesChange}
          onCancel={props.onCancel}
          isDayBlocked={day => day.isBefore(moment(), "day")}
          orientation="verticalScrollable"
          hideKeyboardShortcutsPanel
          initialVisibleMonth={null}
          numberOfMonths={2}
        />
      </div>
    </Content>
  </Wrapper>
);
