import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';

class BarSection extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.setItem('username', '');
    localStorage.setItem('password', '');
    alert("Logout");
    //this.props.history.push('/');
  }

  render() {
    return (
      <div className="bar">
        <div className="logo">Stuffie Logo</div>
        <div className="stuff">Otro stuff</div>
        <div className="logout" onClick={this.handleLogout}>
        <Link to='/'>Logout</Link></div>
      </div>
    );
  }
}

export default BarSection;