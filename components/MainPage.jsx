import React from 'react';
import { render } from 'react-dom';
import  { Redirect } from 'react-router-dom';
import BarSection from './BarSection.jsx';
import MenuSection from './MenuSection.jsx';
import FeedSection from './FeedSection.jsx';
import AppsSection from './AppsSection.jsx';
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
          <FeedSection />
          <AppsSection />
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default MainPage;