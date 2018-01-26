import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { RouteProps } from "react-router";
import Welcome from './Welcome';
import MainPage from './MainPage';

class StuffieRoute extends React.Component {

  constructor(props: any) {
    super(props);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    return localStorage && localStorage.getItem('username') && localStorage.getItem('password');
  }

  render() {
    if (this.isAuthenticated()) {
      return <MainPage />;
    }
    else {
      return <Welcome />;
    }
  }
}

export default StuffieRoute;