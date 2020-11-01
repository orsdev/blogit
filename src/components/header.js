import React from 'react';

function Header() {
  return (
    <header className="header text-center">
      <h1 className="header-logo">Blogit</h1>
      <p className="header-time">{new Date().toDateString()}</p>
      <hr className="header-divider" />
    </header>
  );
}

export default Header;
