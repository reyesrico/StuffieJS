import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedSection from './FeedSection.jsx';
import Products from '../Products.jsx';
import Product from '../Product.jsx';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainsection'>
                <Switch>
                    <Route exact path='/' component={FeedSection} />                    
                    <Route exact path='/products' component={Products} />
                    <Route path='/products/add' component={Product} />                    
                </Switch>
            </div>
        );
    }
}

export default MainSection;