import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Router from './router/router';
import jwt_decode from 'jwt-decode';
import { setUser } from './redux/actions/user.action';
import { setToken } from './redux/actions/token.action';
import './assets/css/style.css';
import 'antd/dist/antd.css';

function App({ error, history, token, onSetUser, onSetToken }) {
  useEffect(() => {
    if (error) {
      history.replace('/500');
    }
    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (!token) {
      const getCookieFromStorage = cookie.load('token');

      if (getCookieFromStorage) {
        // call dispatch function
        onSetToken(getCookieFromStorage);

        const decoded = jwt_decode(getCookieFromStorage);

        if (decoded) {
          // call dispatch function
          onSetUser(decoded);
        }
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

App.propTypes = {
  token: PropTypes.string,
  onSetUser: PropTypes.func.isRequired,
  onSetToken: PropTypes.func.isRequired,
  error: PropTypes.any,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  error: state.error.globalError,
  token: state.token
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetUser: (user) => dispatch(setUser(user)),
    onSetToken: (token) => dispatch(setToken(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
