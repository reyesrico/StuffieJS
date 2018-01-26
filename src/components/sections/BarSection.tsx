import * as React from 'react';
import { Link } from 'react-router-dom';
import MenuSection from './MenuSection';
import Image from '../web_objects/Image';
import Users from '../../models/Users';

class BarSection extends React.Component {
  username: string;
  user: any;
  
  constructor(props: any) {
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
        <div className="barBlock barLogo">
          <Image pic='logo.png' className='logo' />
        </div>
        <MenuSection user={this.user} />
        <div className="barBlock barLogout" onClick={this.handleLogout}>
          <Link to='/'>Logout</Link></div>
      </div>
    );
  }
}

export default BarSection;