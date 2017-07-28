import React, { Component } from 'react';
import { Button } from 'antd';

class Finish extends Component
{
    render()
    {
        return(
            <div>
                {/*<Button type="primary" style={{ width: 150, textAlign: "left" }} icon="plus" ghost onClick={this.props.onAddEvent}>Add Event</Button>
                <br/>
                <br/>
                */}
                <Button type="primary" style={{ width: 150, textAlign: "left" }} icon="calendar" ghost onClick={this.props.onAddEventTime}>Add Event Time</Button>
                <br/>
                <br/>
                <Button type="primary" style={{ width: 150, textAlign: "left" }} icon="pay-circle" ghost onClick={this.props.onAddSeatPrice}>Add Seat Price</Button>
                <br/>
                <br/>
                <Button type="primary" style={{ width: 150, textAlign: "left" }} icon="like" onClick={this.props.onAddEvent}>Done</Button>
            </div>
        );
    }
}

export default Finish;