import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../actions/eventActions'

class CloneEvent extends Component {
    render() {
        return(
            <div/>
        );
    };
};


function mapStateToProps(state, ownProps) {
    const eventId = ownProps.match.params.id;
    if (eventId && state.events.length > 0) {
        //eslint-disable-next-line
        const foundEvent = state.events.filter(e => e.id == eventId)
        if (foundEvent) {
            return {
                event: foundEvent[0]
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

export default connect(mapStateToProps, mapDispatchToProps)(CloneEvent);