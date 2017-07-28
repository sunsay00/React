import React, { Component } from 'react';
import { Layout, Row, Col, Card, Form, Radio, Input, Button, LocaleProvider, Select } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as floorplanActions from '../actions/floorplanActions'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class FloorPlanPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: "",
            floorplan: {
                id: 0,
                location: "",
                sectionOption: "Letter",
                rowOption: "Number",
                seatOption: "Number",
                sectionFrom: "",
                sectionTo: "",
                rowFrom: "",
                rowTo: "",
                seatFrom: "",
                seatTo: "",
                value: ""
            }
        };
    }
    handleOnLocationChange(value) {
        const found = this.props.floorplans.filter(fl => fl.id == value);
        this.state.selected = found[0].value;
        const floorplan = this.state.floorplan;
        const tempSection = found[0].section.split("-");
        floorplan.sectionFrom = tempSection[0];
        floorplan.sectionTo = tempSection[1];
        const tempRow = found[0].row.split("-");
        floorplan.rowFrom = tempRow[0];
        floorplan.rowTo = tempRow[1];
        const tempSeat = found[0].seat.split("-");
        floorplan.seatFrom = tempSeat[0];
        floorplan.seatTo = tempSeat[1];
        floorplan.sectionOption = found[0].sectionOption;
        floorplan.rowOption = found[0].rowOption;
        floorplan.seatOption = found[0].seatOption;
        floorplan.id = found[0].id;
        this.setState(floorplan);
    }
    handleSectionOptionChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.sectionOption = value.target.value;
        this.setState(floorplan);
    }
    handleSectionFromChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.sectionFrom = value.target.value;
        this.setState(floorplan);
    }
    handleSectionToChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.sectionTo = value.target.value;
        this.setState(floorplan);
    }
    handleRowOptionChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.rowOption = value.target.value;
        this.setState(floorplan);
    }
    handleRowFromChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.rowFrom = value.target.value;
        this.setState(floorplan);
    }
    handleRowToChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.rowTo = value.target.value;
        this.setState(floorplan);
    }
    handleSeatOptionChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.seatOption = value.target.value;
        this.setState(floorplan);
    }
    handleSeatFromChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.seatFrom = value.target.value;
        this.setState(floorplan);
    }
    handleSeatToChange(value) {
        const floorplan = this.state.floorplan;
        floorplan.seatTo = value.target.value;
        this.setState(floorplan);
    }
    add() {
        const floorplan = this.state.floorplan;
        floorplan.section = floorplan.sectionFrom + "-" + floorplan.sectionTo;
        floorplan.row = floorplan.rowFrom + "-" + floorplan.rowTo;
        floorplan.seat = floorplan.seatFrom + "-" + floorplan.seatTo;
        floorplan.value = "Section "+floorplan.section + ", Row " + floorplan.row + ", Seat " + floorplan.seat;
        this.setState(floorplan);
        this.props.actions.saveFloorplan(this.state.floorplan)
            .then(() => {
                const floorplan = this.state.floorplan;
                floorplan.id = 0;
                floorplan.location = "";
                floorplan.sectionOption = "Letter";
                floorplan.rowOption = "Number";
                floorplan.seatOption = "Number";
                floorplan.sectionFrom = "";
                floorplan.sectionTo = "";
                floorplan.rowFrom = "";
                floorplan.rowTo = "";
                floorplan.seatFrom = "";
                floorplan.seatTo = "";
                floorplan.value = "";
                this.setState(floorplan);
            })
            .catch(error => {
            });
    };
    render() {
        return (
            <Layout>
            <br/>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={18} style={{ padding: 10 }}>
                            <LocaleProvider locale={enUS}>
                                <Select name="location" style={{ width: 275 }} value={this.state.selected} onSelect={this.handleOnLocationChange.bind(this)}>
                                    {this.props.floorplans.map(loca => <Option key={loca.id.toString()} value={loca.id.toString()}>{loca.value}</Option>)}
                                </Select>
                            </LocaleProvider>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} style={{ padding: 10 }}>
                            <Card title="Section">
                                <Form.Item>
                                    <RadioGroup defaultValue="Letter" value={this.state.floorplan.sectionOption} onChange={this.handleSectionOptionChange.bind(this)} size="large">
                                        <RadioButton value="Letter" style={{width: 125}}>Letter</RadioButton>
                                        <RadioButton value="Number" style={{width: 125}}>Number</RadioButton>
                                    </RadioGroup>
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder="From" style={{width: 250}} value={this.state.sectionFrom} onChange={this.handleSectionFromChange.bind(this)} />
                                    <Input placeholder="To" style={{width: 250}} value={this.state.sectionTo} onChange={this.handleSectionToChange.bind(this)} />
                                </Form.Item>
                            </Card>
                        </Col>
                        <Col span={6} style={{ padding: 10 }}>
                            <Card title="Row">
                                <Form.Item>
                                    <RadioGroup defaultValue="Number" value={this.state.floorplan.rowOption} onChange={this.handleRowOptionChange.bind(this)} size="large">
                                        <RadioButton value="Letter" style={{width: 125}}>Letter</RadioButton>
                                        <RadioButton value="Number" style={{width: 125}}>Number</RadioButton>
                                    </RadioGroup>
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder="From" style={{width: 250}} value={this.state.rowFrom} onChange={this.handleRowFromChange.bind(this)} />
                                    <Input placeholder="To" style={{width: 250}} value={this.state.rowTo} onChange={this.handleRowToChange.bind(this)}/>
                                </Form.Item>
                            </Card>
                        </Col>
                        <Col span={6} style={{ padding: 10 }}>
                            <Card title="Seat">
                                <Form.Item>
                                    <RadioGroup defaultValue="Number" value={this.state.floorplan.seatOption} onChange={this.handleSeatOptionChange.bind(this)} size="large">
                                        <RadioButton value="Letter" style={{width: 125}}>Letter</RadioButton>
                                        <RadioButton value="Number" style={{width: 125}}>Number</RadioButton>
                                    </RadioGroup>
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder="From" style={{width: 250}} value={this.state.seatFrom} onChange={this.handleSeatFromChange.bind(this)} />
                                    <Input placeholder="To" style={{width: 250}} value={this.state.seatTo} onChange={this.handleSeatToChange.bind(this)} />
                                </Form.Item>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12} style={{ padding: 10 }}>
                            <Button type="primary" style={{ textAlign: "center" }} icon="save" onClick={this.add.bind(this)}>Save</Button>
                        </Col>
                    </Row>
                </Form>
            </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(FloorPlanPage);
