import React from 'react';
import { render } from 'react-dom';
import BarSection from './BarSection.jsx';
import MenuSection from './MenuSection.jsx';
import FeedSection from './FeedSection.jsx'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <BarSection />
        <MenuSection />
        <FeedSection />        
      </div>
    );
  }
}

render(<MainPage />, document.getElementById('stuffie'));
