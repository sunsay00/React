import React, { Component } from 'react';
import AppHeader from './common/AppHeader';
import AppFooter from './common/AppFooter';
import SeatPrice from './SeatPricePage';
import EventPage from './EventPage'
import { Route, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'antd/lib/layout/style/css';
import AddEvent from './AddEventPage';
import AddSeatPrice from './AddSeatPrice';
import FloorPlan from './FloorPlanPage';
import Login from './Login';
import Register from './Register';
import Performer from './Performer';
import Blank from './Blank';
import Account from './Blank';
import * as userActions from '../actions/userActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props, context){
    super(props, context)
    
    }
  render() {   
    this.state = {
      isLogin: this.props.user && this.props.user.id && this.props.user.id != "" ? true : false,
    }; 
    return (
      <div>
        <AppHeader />
        <Route exact path="/" component={ Blank} />
        <Route path="/events" component={ this.state.isLogin ? EventPage : Login} />
        <Route path="/seatprice" component={ this.state.isLogin ? SeatPrice : Login} />
        <Route path="/addevent" component={ this.state.isLogin ? AddEvent : Login} />
        <Route path="/addseatprice" component={ this.state.isLogin ? AddSeatPrice : Login} />
        <Route path="/editevent/:id/:instruction" component={ this.state.isLogin ? AddEvent : Login} />
        <Route path="/editseatprice/:id" component={ this.state.isLogin ? AddSeatPrice : Login} />
        <Route path="/floorplan" component={ this.state.isLogin ? FloorPlan : Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/performer" component={ this.state.isLogin ? Performer : Login} />
        <Route path="/account" component={this.state.isLogin ?  Account : Login} />
        <AppFooter />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

