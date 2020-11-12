import React, { useEffect } from 'react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import PropTypes from 'prop-types';
import { setUser } from '../redux/actions/user.action';
import { setToken } from '../redux/actions/token.action';
import Header from '../components/header';
import Main from '../components/main';

function Home({ token, onSetUser, onSetToken }) {
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
      <Header />
      <Main />
    </>
  );
}

Home.propTypes = {
  token: PropTypes.any,
  onSetUser: PropTypes.func.isRequired,
  onSetToken: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetUser: (user) => dispatch(setUser(user)),
    onSetToken: (token) => dispatch(setToken(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
