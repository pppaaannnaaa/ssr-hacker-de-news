import React from 'react';

const Header = () => {
  return (
    <div className="navbar-fixed" role="navigation" aria-label="News de Hacker Logo">
      <nav className="blue">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo" style={{ whiteSpace: 'nowrap' }}>
              News de Hacker
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
