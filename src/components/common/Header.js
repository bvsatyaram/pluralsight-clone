import React from 'react';
import {IndexLink, Link} from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <IndexLink to="/" className="navbar-brand">PS Clone</IndexLink>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </li>
            <li>
              <Link to="about" activeClassName="active">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
