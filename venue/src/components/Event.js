import React, { Component } from 'react';
import { Input, Select, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as performerActions from '../actions/performerActions'

class Event extends Component {
    handleOnChange(e) {
        this.props.onEventNameChanged(e.target.name, e.target.value);
    }
    handlePerformersChange(value){
        this.props.onPerformersChanged(value);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col style={{ padding: 10 }}>
                        <Input name="eventName" style={{width: '100%'}} placeholder="Title" value={this.props.name} onChange={this.handleOnChange.bind(this)} />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ padding: 10 }}>
                        <Select placeholder="Performer" mode="multiple" style={{width: '100%'}} onChange={this.handlePerformersChange.bind(this)}>
                            {this.props.performers.map(p => <Select.Option key={p.id} value={p.id}>{p.name}</Select.Option>)}
                        </Select>
                    </Col>
                </Row>
            </div>
        );
    }
}



function mapStateToProps(state, ownProps) {
    return {
        performers: state.performers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(performerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);