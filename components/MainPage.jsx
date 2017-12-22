import React from 'react';
import { render } from 'react-dom';
import  { Redirect } from 'react-router-dom';
import BarSection from './sections/BarSection.jsx';
import MenuSection from './sections/MenuSection.jsx';
import MainSection from './sections/MainSection.jsx';
import AppsSection from './sections/AppsSection.jsx';
import Footer from './Footer.jsx';

class MainPage extends React.Component {
  constructor(props){
    super(props);

    var auth = localStorage && localStorage.getItem('username') && localStorage.getItem('password'); 
    if (!auth) {
        return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div>
        <BarSection />
        <div className="content">
          <MenuSection />
          <MainSection />
          <AppsSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;