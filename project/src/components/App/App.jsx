import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Registration</Link>
        <Link to='/reestablish'>Reestablish</Link>
        <div>
          {
            renderRoutes(this.props.route.routes)
          }
        </div>
      </div>
    );
  }
}


export default (App);
