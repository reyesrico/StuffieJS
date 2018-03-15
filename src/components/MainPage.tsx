import * as React from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import BarSection from './sections/BarSection';
import ProductsSection from './sections/ProductsSection';
import MainSection from './sections/MainSection';
import AppsSection from './sections/AppsSection';
import Footer from './Footer';
import Author from './Author';

class MainPage extends React.Component {

  auth: string;

  constructor(props: any) {
    super(props);

    this.auth = localStorage && localStorage.getItem('username') && localStorage.getItem('password');
  }

  render() {
    if (!this.auth) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <BarSection />
        <div className="content">
          <ProductsSection />
          <MainSection />
          <AppsSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;