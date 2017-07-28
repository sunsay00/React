import React, { Component } from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../actions/eventActions';

class HomeContentOld extends Component {
    render() {
        const columns = [{
            title: 'Event',
            dataIndex: 'name',
        }, {
            title: 'Date',
            dataIndex: 'eventtimedisplay',
        }, {
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
                    <Link to={`/editevent/${record.id}`}>Edit</Link>
                </span>
            ),
        }];
        const {events} = this.props;
        return (
            <div>
                <Table columns={columns} dataSource={events} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContentOld);
