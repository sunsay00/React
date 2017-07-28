import React, { Component } from 'react';
import { LocaleProvider, Select, Button, Row, Col, Card, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../actions/eventActions'
import enUS from 'antd/lib/locale-provider/en_US';
const Option = Select.Option;

class AddSeatPricePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cardTitle: "Seat/Price",
            eventName: props.event ? props.event.title : "",
            ticket: {
                event_id: props.ticket ? props.ticket.event_id : "Event",
                id: props.ticket ? props.ticket.id : "",
                location: props.ticket ? props.ticket.location : "Seat",
                locationId: props.ticket ? props.ticket.locationId : 0,
                price: props.ticket ? props.ticket.price : 0,
                section: props.ticket ? props.ticket.section : "",
                row: props.ticket ? props.ticket.row : "",
                seat: props.ticket ? props.ticket.seat : "",
            }
        };

        this.eventChanged = this.eventChanged.bind(this);
        this.locationChanged = this.locationChanged.bind(this);
        this.priceChanged = this.priceChanged.bind(this);
        this.save = this.save.bind(this);
        this.saveAndClear = this.saveAndClear.bind(this);
    }
    eventChanged(value) {
        const ticket = this.state.ticket;
        let foundevent = this.props.events.filter(e => e.id == value);
        ticket.event_id = foundevent[0].id;
        this.setState(ticket);
    }
    save() {
        this.props.actions.saveTicket(this.state.ticket)
            .then(()=>{
                const ticket = this.state.ticket;
                ticket.location = "";
                ticket.locationId = 0;
                ticket.price = "";
                this.setState(ticket);
            })
            .catch(error => {
                debugger;
            });
    };
    saveAndClear() {
        this.save();
        const ticket = this.state.ticket;
        ticket.event_id = "";
        this.setState(ticket);
    }
    locationChanged(value) {
        const floorplan = this.props.floorplans.filter(f=>f.id == value)[0];
        const ticket = this.state.ticket;
        ticket.locationId = floorplan.id;
        ticket.location = floorplan.value;
        ticket.section = floorplan.section;
        ticket.row = floorplan.row;
        ticket.seat = floorplan.seat;
        this.setState({ ticket });
    };
    priceChanged(value) {
        const ticket = this.state.ticket;
        ticket.price = value;
        this.setState({ ticket });
    }
    render() {
        return (
            <Row type="flex" justify="space-between" align="middle" >
                <Col span={5} />
                <Col span={14} style={{ padding: 10 }}>
                    <Card title={this.state.cardTitle} style={{ height: 275 }}>
                        <Row>
                            <Col style={{ padding: 10 }}>
                                <Select placeholder="Event" style={{ width: '100%' }} value={this.state.ticket.event_id} onChange={this.eventChanged}>
                                    {this.props.events.map(e => <Select.Option key={e.id} value={e.id}>{e.title + " (" + e.eventtimedisplay + ")"}</Select.Option>)}
                                </Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: 10 }}>
                                <LocaleProvider locale={enUS}>
                                    <Select name="location" placeholder="Seat" value={this.state.ticket.location} style={{ width: '100%' }} onSelect={this.locationChanged}>
                                        {this.props.floorplans.map(loca => <Option key={loca.id.toString()} value={loca.id.toString()}>{loca.value}</Option>)}
                                    </Select>
                                </LocaleProvider>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: 10 }}>
                                <InputNumber name="price" placeholder="Price" value={this.state.ticket.price} style={{ width: '100%' }} onChange={this.priceChanged} />
                            </Col>
                            <Col>
                                <Row>
                                    <Col span={12} style={{ padding: 10 }}>
                                        <Button type="primary" style={{ width: '100%', textAlign: "center" }} ghost icon="save" onClick={this.save} >Save</Button>
                                    </Col>
                                    <Col span={12} style={{ padding: 10 }}>
                                        <Button type="primary" style={{ width: '100%', textAlign: "center" }} icon="database" onClick={this.saveAndClear}>Save And Clear</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={5} />
            </Row>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const ticketId = ownProps.match.params.id;
    if (ticketId && state.events.length > 0) {
        //eslint-disable-next-line
        const foundTicket = state.events.map(e => e.tickets.filter(t => t.id == ticketId));
        if (foundTicket) {
            return {
                ticket: foundTicket[0][0],
                events: state.events,
                floorplans: state.floorplans
            };
        }
    }
    return {
        events: state.events,
        floorplans: state.floorplans
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSeatPricePage);
//export default AddEventPage;
