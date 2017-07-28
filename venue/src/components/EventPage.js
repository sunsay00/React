import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../actions/eventActions';

class EventPage extends Component {
    render() {
        const columns = [ {
            title: 'Event Name',
            dataIndex: 'title',
        }, {
            title: 'Event Date',
            dataIndex: 'eventtimedisplay',
        },{
            render: (text, record) => (
                <span>
                    <Link to={`/editevent/${record.id}/edit`}>Edit</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to={`/editevent/${record.id}/clone`}>Clone</Link>
                </span>
            ),
        }];
        const { events } = this.props;

        return (
            <div>
                <Row>
                    <Col span={24} style={{ padding: 10 }}>
                        <Table columns={columns} dataSource={events} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
