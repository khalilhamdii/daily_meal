import React from 'react';
import '../assets/nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div className="container">
        <a className="navbar-brand" href="/">
          Daily meal
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          type="button"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item" />
          </ul>
          <i
            className="fa fa-user-circle fa-2x ml-4"
            style={{ color: 'white' }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
