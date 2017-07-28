import React, { Component } from 'react';
import { InputNumber, Select, LocaleProvider } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as floorplanActions from '../actions/floorplanActions'
import enUS from 'antd/lib/locale-provider/en_US';
const Option = Select.Option;

class SeatPrice extends Component {
    handleOnLocationChange(value) {
        const found = this.props.floorplans.filter(fl=>fl.id == value);
        this.props.onLocationChanged(found[0]);
    }
    handleOnPriceChange(value) {
        this.props.onPriceChanged(value);
    }

    render() {
        return (
            <div>
                <LocaleProvider locale={enUS}>
                    <Select name="location" placeholder="Seat" value={this.props.location} style={{ width: 275 }} onSelect={this.handleOnLocationChange.bind(this)}>
                        {this.props.floorplans.map(loca => <Option key={loca.id.toString()} value={loca.id.toString()}>{loca.value}</Option>)}
                    </Select>
                </LocaleProvider>

                <br />
                <br />
                <InputNumber name="price" placeholder="Price" p value={this.props.price} style={{ width: 275 }} onChange={this.handleOnPriceChange.bind(this)} />
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        floorplans: state.floorplans
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(floorplanActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatPrice);
