import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import 'antd/lib/layout/style/css'
import { Link } from 'react-router-dom'
import * as userActions from '../../actions/userActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { Header } = Layout;


class AppHeader extends Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    this.state = {
      isLogin: this.props.user && this.props.user.id && this.props.user.id != "" ? true : false,
      //isLogin: true,
      span1: this.props.isLogin ? 22 : 20,
      span2: this.props.isLogin ? 2 : 4,
    };
    return (
      <Header className="header">
        <div className="logo" />
        <Row>
          <Col span={this.state.span1}>
            { this.state.isLogin ?
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
            {/*
              <Menu.Item key="home">
                <Link to="/home"><Icon type="home" />home</Link>
              </Menu.Item>
              */}
              <Menu.Item key="events">
                <Link to="/events"><Icon type="plus-circle" />Events</Link>
              </Menu.Item>
              <Menu.Item key="addevent">
                <Link to="/addevent"><Icon type="plus-circle" />Add Event</Link>
              </Menu.Item>
               <Menu.Item key="seatprice">
                <Link to="/seatprice"><Icon type="plus-circle" />Seat/Price</Link>
              </Menu.Item>
              <Menu.Item key="addseatprice">
                <Link to="/addseatprice"><Icon type="plus-circle" />Add Seat/Price</Link>
              </Menu.Item>
              {/*
              <Menu.Item key="upload">
                <Icon type="up-circle" />Upload Event
                </Menu.Item>
              */}
              <Menu.Item key="configurefloorplan">
                <Link to="/floorplan"><Icon type="layout" />Configure Floor Plan</Link>
              </Menu.Item>
              <Menu.Item key="performers">
                <Link to="/performer"><Icon type="team" />Performers</Link>
              </Menu.Item>
            </Menu>
            : null}
          </Col>
          <Col span={this.state.span2}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              {this.state.isLogin ?
                <Menu.Item key="user">
                  <Link to="/user"><Icon type="user" />Account</Link>
                </Menu.Item> : null}
              {this.state.isLogin ? null :
                <Menu.Item key="login">
                  <Link to="/login"><Icon type="user" />Login</Link>
                </Menu.Item>}
              {this.state.isLogin ? null :
                <Menu.Item key="register">
                  <Link to="/register"><Icon type="user" />Register</Link>
                </Menu.Item>}
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);