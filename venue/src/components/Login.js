import React, { Component } from 'react';
import { Form, Icon, Input, Button, Card, Row, Col } from 'antd';
import * as userActions from '../actions/userActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const FormItem = Form.Item;

class Login extends Component {
  constructor(props, context){
    super(props, context);
     this.state = {
      user: {
        id: "",
        userName: "",
        password: ""
      }
    };
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let user = this.state.user;
        user.userName = values.userName;
        user.password = values.password;
        this.setState(user);
        this.props.actions.login(this.state.user)
            .then(() => this.redirect())
            .catch(error => {
              debugger;
            });
      }
    });
  }
  redirect(){
    this.props.history.push('/events');
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row>
        <Col span={10}/>
        <Col span={4}>
      <Card title="Login" style={{width: 300}}>
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {/*{(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          */}
          <Button type="primary" htmlType="submit"style={{width: '100%'}} onClick={this.handleSubmit.bind(this)} className="login-form-button">
            Log in
          </Button>
          {/*
          <br/>
          Or <a href="">register now!</a>
          */}
        </FormItem>
      </Form>
      </Card>
      </Col>
      <Col span={10}/>
      </Row>
    );
  }
}

const LoginForm = Form.create()(Login);

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);