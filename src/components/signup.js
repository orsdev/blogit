import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../redux/actions/signup.action';

const Signup = ({ error, token, onSignup }) => {
  const [disableButton, setDisableButton] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (token) {
      // update states
      setDisableButton(false);
      setButtonLoading(false);

      // clear form fields
      form.resetFields();
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    // update states
    setDisableButton(false);
    setButtonLoading(false);
  }, [error]);

  const onFinish = (values) => {
    // update states
    setDisableButton(true);
    setButtonLoading(true);

    // call dispatch function
    onSignup(values);
  };

  return (
    <>
      <section className="signup">
        <Link to="/" className="logo">
          Blogit
        </Link>
        <div className="signup-body mb-5">
          <Form form={form} name="signup" onFinish={onFinish}>
            {token ? (
              <div className="signup-body-success mx-auto mb-4">
                <Alert
                  message={
                    <>
                      <span>Account created successfully.</span>
                      <Link to="/login" className="ml-2 signup-link">
                        Log in
                      </Link>
                    </>
                  }
                  type="success"
                  showIcon
                />
              </div>
            ) : null}
            {error && typeof error === 'string' ? (
              <div className="signup-body-error mx-auto mb-4">
                <Alert message={error} type="error" showIcon />
              </div>
            ) : null}
            <h6>Create your Account!</h6>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  min: 4
                }
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  required: true
                }
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Password must atleast be 6 characters!',
                  min: 6
                }
              ]}>
              <Input type="password" />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              label="Confirm Password"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!'
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (
                      !value ||
                      getFieldValue('password') === value
                    ) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      'The two passwords that you entered do not match!'
                    );
                  }
                })
              ]}>
              <Input type="password" />
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <Button
                disabled={disableButton}
                loading={buttonLoading}
                type="primary"
                htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <span>Already have an account?</span>
              <Link to="/login" className="ml-2 signup-link">
                Log in
              </Link>
            </Form.Item>
            {error && Array.isArray(error) ? (
              <div className="signup-body-error mx-auto mt-4">
                <Alert
                  message={error.map((value, index) => {
                    return (
                      <li
                        key={index}
                        className="h4 list-item text-danger py-1 d-flex">
                        <span className="font-weight-bold text-danger">
                          &#42;
                        </span>
                        {value}
                      </li>
                    );
                  })}
                  type="error"
                />
              </div>
            ) : null}
          </Form>
        </div>
      </section>
    </>
  );
};

Signup.propTypes = {
  token: PropTypes.string,
  error: PropTypes.any,
  onSignup: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  token: state.signup.token,
  error: state.signup.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (userData) => dispatch(signup(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
