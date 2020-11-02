import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
  const [disableButton, setDisableButton] = useState(false);

  const onFinish = (values) => {
    setDisableButton(true);
  };

  return (
    <>
      <section className="login">
        <Link exact to="/" className="login-logo">
          Blogit
        </Link>
        <div className="login-body">
          <Form name="login" onFinish={onFinish}>
            <h6>Login your Account!</h6>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input type="email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}>
              <Input type="password" />
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <Button disabled={disableButton} type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <span>Don't have an account?</span>
              <Link exact to="/join" className="ml-2 signup-link">
                Sign up
              </Link>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
