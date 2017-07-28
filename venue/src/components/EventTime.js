import React, { Component } from 'react';
import { DatePicker, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const RangePicker = DatePicker.RangePicker;

class EventTime extends Component {
    handleOnChange(date, datestring){
    this.props.onEventTimeChanged(date, datestring);
  }
    render() {
        return (
            <div>
                <LocaleProvider locale={enUS}>
                    <RangePicker name="eventTime" value={this.props.eventtime}  onChange={this.handleOnChange.bind(this)}/>
                </LocaleProvider>
            </div>
        );
    }
}

export default EventTime;