/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import './login.scss'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginApi } from '../../api/api'


class Login extends Component {
  constructor(props) {
    super(props)
    this.onFinish = this.onFinish.bind(this)
  }


  onFinish(values) {
    console.log('Success:', values)
    if (values) {
      loginApi(values).then((res) => {
        console.log(res)
        if (res) {
          this.props.history.push('/home')
        }
      })
    }
  }
  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo)
  }
  render() {
    return (
      <div className="div-box">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入账号'
              }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
          </Form.Item>
          <Form.Item className="form-button">
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
          <Form.Item className="form-button">
            <Button type="primary" onClick={() => this.props.history.push('/register')}>注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login
