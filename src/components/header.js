import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header text-center">
      <h1 className="header-logo">Blogit</h1>
      <p className="header-time">{new Date().toDateString()}</p>
      <div className="header-auth text-right">
        <Link
          to="/signin"
          className="text-light btn btn-secondary btn-md rounded-0 mr-2">
          Sign in
        </Link>
        <Link to="/join" className="text-light btn btn-danger btn-md rounded-0">
          Join
        </Link>
      </div>
      <hr className="header-divider" />
    </header>
  );
}

export default Header;
