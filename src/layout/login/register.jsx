import React, { Component } from 'react'
import './register.scss'
import {
    Form, Input, Button, Row, Col
} from 'antd'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div className="register-div-box">
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
                        name="username"
                        rules={[{ required: true, message: '请输入手机号' }]}
                    >
                        <Input placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={14}>
                                <Form.Item
                                    name="tcha"
                                    noStyle
                                    rules={[{ required: true, message: '请输入图片验证码' }]}
                                >
                                    <Input placeholder="请输入图片验证码" />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Button className="getCodeBtn">Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={14}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[{ required: true, message: '请输入短信验证码' }]}
                                >
                                    <Input placeholder="请输入短信验证码" />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Button className="getCodeBtn">获取验证码</Button>
                            </Col>
                        </Row>
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
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item
                        name="pass"
                        rules={[
                            {
                                required: true,
                                message: '请确认密码'
                            }
                        ]}
                    >
                        <Input.Password placeholder="请确认密码" />
                    </Form.Item>
                    <Link to="/" className="login-link">→去登录</Link>
                    <Form.Item className="form-button">
                        <Button type="primary" htmlType="submit">立即注册</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Register