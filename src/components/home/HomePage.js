import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Course Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link className="btn btn-primary btn-lg" to="about">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
