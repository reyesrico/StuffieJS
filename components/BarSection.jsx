import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import Image from './Image.jsx';

class BarSection extends React.Component {
  constructor(props){
    super(props);
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
        <div className="logo">
          <Image pic='logo.png' className='barLogo' />
          <span className='barStuffie'>Stuffie</span>
        </div>
        <div className="stuff">Otro stuff</div>
        <div className="logout" onClick={this.handleLogout}>
        <Link to='/'>Logout</Link></div>
      </div>
    );
  }
}

export default BarSection;