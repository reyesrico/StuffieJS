import React from 'react';
import { render } from 'react-dom';
import BarSection from './BarSection.jsx';
import MenuSection from './MenuSection.jsx';
import FeedSection from './FeedSection.jsx';
import AppsSection from './AppsSection.jsx';
import Footer from './Footer.jsx';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <BarSection />
        <div className="content">        
          <MenuSection />
          <FeedSection />
          <AppsSection />
        </div>
        <Footer />      
      </div>
    );
  }
}

render(<MainPage />, document.getElementById('stuffie'));
