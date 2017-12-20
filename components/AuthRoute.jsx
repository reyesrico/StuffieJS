import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import MainPage from './MainPage.jsx';

class AuthRoute extends React.Component {
  constructor(props) {
    super(props);
    this.PRIVATE_ROOT = '/';
    this.PUBLIC_ROOT = '/login';

    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    return localStorage && localStorage.getItem('username') && localStorage.getItem('password'); //true;
  }

  render() {
    if (this.isAuthenticated()) {
      return <MainPage />;
    }
    else {
      return <Redirect to={this.PUBLIC_ROOT} />;
    }
  }
}

export default AuthRoute;