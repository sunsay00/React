import React, { Component } from 'react';
import { DatePicker, LocaleProvider, Select, Input, Button, Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../actions/eventActions'
import enUS from 'antd/lib/locale-provider/en_US';
const RangePicker = DatePicker.RangePicker;


class AddEventPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            buttonName1: props.buttonName1 ? props.buttonName1 : "Save",
            buttonName2: props.buttonName2 ? props.buttonName2 : "Save And Clear",
            cardTitle: props.cardTitle ? props.cardTitle : "Event",
            event: {
                id: props.event ? props.event.id : "",
                title: props.event ? props.event.title : "",
                venue: {
                    id: "",
                },
                performers: [],
                eventtime: props.event ? props.event.eventtime : [],
                eventtimedisplay: props.event ? props.event.eventtimedisplay : "",
            },
        };

        this.eventNameChanged = this.eventNameChanged.bind(this);
        this.eventTimeChanged = this.eventTimeChanged.bind(this);
        this.performersChanged = this.performersChanged.bind(this);
        this.save = this.save.bind(this);
        this.saveAndClear = this.saveAndClear.bind(this);
    }

    save() {
        if (this.props.venue) {
            const event = this.state.event;
            event.venue.id = this.props.venue.id;
        }
        this.props.actions.saveEvent(this.state.event)
            .then(() => {
                const event = this.state.event;
                event.eventtime = [];
                event.eventtimedisplay = "";
                this.setState({ event });
            })
            .catch(error => {
                debugger;
            });
    };
    saveAndClear() {
        this.save();
        const event = this.state.event;
        event.id = 0;
        event.title = "";
        event.performers = [];
        this.setState({ event });
    };
    eventNameChanged(e) {
        const event = this.state.event;
        event.title = e.target.value;
        this.setState({ event });
    };
    performersChanged(value) {
        const event = this.state.event;
        event.performers = [];
        for (let i = 0; i < value.length; i++)
            event.performers.push({ id: value[i] });
        this.setState(event);
    }
    eventTimeChanged(date, datestring) {
        const event = this.state.event;
        event.eventtime = date;
        event.eventtimedisplay = new Date(datestring[0]).toLocaleDateString("en-US") + ' - ' + new Date(datestring[1]).toLocaleDateString("en-US");
        this.setState({ event });
    };
    render() {
        return (
            <Row type="flex" justify="space-between" align="middle" >
                <Col span={5} />
                <Col span={14} style={{ padding: 10 }}>
                    <Card title={this.state.cardTitle} style={{ height: 275 }}>
                        <Row>
                            <Col style={{ padding: 10 }}>
                                <Input name="eventName" style={{ width: '100%' }} placeholder="Title" value={this.state.event.title} onChange={this.eventNameChanged} />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: 10 }}>
                                <Select placeholder="Performer" mode="multiple" style={{ width: '100%' }} onChange={this.performersChanged}>
                                    {this.props.performers.map(p => <Select.Option key={p.id} value={p.id}>{p.name}</Select.Option>)}
                                </Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: 10 }}>
                                <LocaleProvider locale={enUS}>
                                    <RangePicker name="eventTime" style={{ width: '100%' }} value={this.state.event.eventtime} onChange={this.eventTimeChanged} />
                                </LocaleProvider>
                            </Col>
                            <Col>
                                <Row>
                                    <Col span={12} style={{ padding: 10 }}>
                                        <Button type="primary" style={{ width: '100%', textAlign: "center" }} ghost icon="save" onClick={this.save}>{this.state.buttonName1}</Button>
                                    </Col>
                                    <Col span={12} style={{ padding: 10 }}>
                                        <Button type="primary" style={{ width: '100%', textAlign: "center" }} icon="database" onClick={this.saveAndClear}>{this.state.buttonName2}</Button>
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
    const eventId = ownProps.match.params.id;
    const instruction = ownProps.match.params.instruction;
    debugger;
    if (eventId && state.events.length > 0) {
        //eslint-disable-next-line
        const foundEvent = state.events.filter(e => e.id == eventId)
        if (foundEvent) {
            return {
                cardTitle: instruction == "edit" ? "Event" : "Cloning "+ foundEvent[0].title+" ("+foundEvent[0].eventtimedisplay+")",
                buttonName1: instruction == "edit" ? "Save" : "Clone",
                buttonName2: instruction == "edit" ? "Save And Clear" : "Clone And Clear",
                event: instruction == "edit" ? foundEvent[0] : null,
                performers: state.performers
            };
        }
    }
    return {
        venue: state.venue,
        performers: state.performers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage);
//export default AddEventPage;
