import React from 'react';
import { Link } from 'react-router-dom';
import MenuSection from './MenuSection.jsx';
import Image from '../web_objects/Image.jsx';
import Users from '../../models/Users.jsx';

class BarSection extends React.Component {
  constructor(props) {
    super(props);

    this.username = localStorage.getItem('username');
    if (this.username !== undefined) {
      var us = new Users();
      this.user = us.getUser(this.username);
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.setItem('username', '');
    localStorage.setItem('password', '');
    alert("Logout");
  }

  render() {
    return (
      <div className="bar">
        <div className="barBlock logo">
          <Image pic='logo.png' className='barLogo' />
        </div>
        <MenuSection user={this.user} />
        <div className="barBlock logout" onClick={this.handleLogout}>
          <Link to='/'>Logout</Link></div>
      </div>
    );
  }
}

export default BarSection;