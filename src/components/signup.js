import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [disableButton, setDisableButton] = useState(false);

  const onFinish = (values) => {
    setDisableButton(true);
  };

  return (
    <>
      <section className="signup">
        <Link exact to="/" className="signup-logo">
          Blogit
        </Link>
        <div className="signup-body">
          <Form name="signup" onFinish={onFinish}>
            <h6>Create your Account!</h6>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  min: 4,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  required: true,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                  min: 6,
                },
              ]}>
              <Input type="password" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                  min: 6,
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      'The two passwords that you entered do not match!'
                    );
                  },
                }),
              ]}>
              <Input type="password" />
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <Button disabled={disableButton} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <span>Already have an account?</span>
              <Link exact to="/login" className="ml-2 signup-link">
                Log in
              </Link>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Signup;
