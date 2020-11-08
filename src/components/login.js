import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../redux/actions/login.action';
import { setUser } from '../redux/actions/user.action';

const Login = ({ token, error, user, onLogin, onSetUser, history }) => {
  const [disableButton, setDisableButton] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (token) {
      // update states
      setDisableButton(false);
      setButtonLoading(false);
      const getCookieFromStorage = cookie.load('token');

      // remove old cookie
      if (getCookieFromStorage) {
        cookie.remove('token', { path: '/' });
      }

      const expires = new Date();
      // 1 hour
      expires.setDate(Date.now() + 1000 * 60 * 60);
      // save token to cookie
      cookie.save('token', token, { path: '/' }, expires);

      const decoded = jwt_decode(token);

      if (decoded) {
        // call dispatch function
        onSetUser(decoded);
        // redirect to home
        history.push('/');
      }
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (error) {
      // update states
      setDisableButton(false);
      setButtonLoading(false);
    }
  }, [error]);

  const onFinish = (values) => {
    // update states
    setDisableButton(true);
    setButtonLoading(true);

    // call dispatch function
    onLogin(values);
  };

  return (
    <>
      <section className="login">
        <Link to="/" className="login-logo">
          Blogit
        </Link>
        <div className="login-body">
          <Form name="login" onFinish={onFinish}>
            {error && typeof error === 'string' ? (
              <div className="login-body-error mx-auto mb-4">
                <Alert message={error} type="error" showIcon closable />
              </div>
            ) : null}
            <h6>Login your Account!</h6>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true
                }
              ]}>
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}>
              <Input type="password" />
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <Button
                disabled={disableButton}
                loading={buttonLoading}
                type="primary"
                htmlType="submit">
                Log in
              </Button>
            </Form.Item>
            <Form.Item className="m-0 p-0">
              <span>Don't have an account?</span>
              <Link to="/join" className="ml-2 signup-link">
                Sign up
              </Link>
            </Form.Item>
            {error && Array.isArray(error) ? (
              <div className="login-body-error mx-auto mt-4">
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

Login.propTypes = {
  token: PropTypes.string,
  error: PropTypes.any,
  user: PropTypes.any,
  onLogin: PropTypes.func.isRequired,
  onSetUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  token: state.login.token,
  error: state.login.error,
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(login(email, password)),
    onSetUser: (user) => dispatch(setUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
