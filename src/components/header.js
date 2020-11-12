import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import { logOut } from '../redux/actions/login.action';
import { removeUser } from '../redux/actions/user.action';
import { deleteToken } from '../redux/actions/token.action';

function Header({ user, onLogOut, onRemoveUser, onDeleteToken }) {
  const logOutUser = () => {
    //clear token from cookie
    cookie.remove('token', { path: '/' });
    onLogOut();
    onRemoveUser();
    onDeleteToken();
  };

  return (
    <header className="header text-center">
      <h1 className="logo">Blogit</h1>
      <p className="header-time">{new Date().toDateString()}</p>
      <div className="header-auth text-right">
        {user ? (
          <button
            className="text-light btn btn-danger btn-md rounded-0 py-2 font-weight-bold"
            style={{
              width: '80px'
            }}
            onClick={logOutUser}>
            Log out
          </button>
        ) : (
          <div className="header-link-wrapper">
            <Link
              to="/login"
              className="text-light btn btn-secondary btn-md rounded-0 mr-2">
              Sign in
            </Link>
            <Link
              to="/join"
              className="text-light btn btn-danger btn-md rounded-0">
              Join
            </Link>
          </div>
        )}
      </div>
      <hr className="header-divider" />
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.any,
  onLogOut: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired,
  onDeleteToken: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(logOut()),
    onRemoveUser: () => dispatch(removeUser()),
    onDeleteToken: () => dispatch(deleteToken())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
