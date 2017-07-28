import React, { Component } from 'react';
import { Table, Row, Col, Select } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../actions/eventActions';

class SeatPricePage extends Component {
    constructor(props, context) {
        super(props, context);
        let tickets = [];
        props.events.map(e=>e.tickets.map(t=>tickets.push(t)));
        this.state = {
            event: {
                updatedAt: "",
                createdAt: "",
                id: "",
                title: "",
                eventtimedisplay: "",
                eventtime: [],
                venue: {},
                performers: [],
                tickets: [],
                created_by: ""
            },
            tickets: tickets
        }

    }
    eventChanged(value) {
        const tempstate = this.state;
        let foundevent = this.props.events.filter(e => e.id == value);
        tempstate.tickets = foundevent[0].tickets;
        this.setState(tempstate);
    }
    render() {
        const columns = [ {
            title: 'Section',
            dataIndex: 'section',
        }, {
            title: 'Row',
            dataIndex: 'row',
        }
            , {
            title: 'Seat',
            dataIndex: 'seat',
        }, {
            title: 'Price',
            dataIndex: 'price'
        }, {
            render: (text, record) => (
                <span>
                    <Link to={`/editseatprice/${record.id}`}>Edit</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to={`/cloneseatprice/${record.id}`}>Clone</Link>
                </span>
            ),
        }];
        const { events } = this.props;

        return (
            <div>
                <Row>
                    <Col span={24} style={{ padding: 10 }}>
                        <Select placeholder="Event" style={{ width: '50%' }} onChange={this.eventChanged.bind(this)}>
                            {events.map(e => <Select.Option key={e.id} value={e.id}>{e.title + " (" + e.eventtimedisplay + ")"}</Select.Option>)}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: 10 }}>
                        <Table columns={columns} dataSource={this.state.tickets} />
                    </Col>
                </Row>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatPricePage);
