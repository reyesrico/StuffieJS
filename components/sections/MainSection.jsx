import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedSection from '../Feed.jsx';
import Products from '../Products.jsx';
import Friends from '../Friends.jsx';
import Tickets from '../Tickets.jsx';
import Report from '../Report.jsx';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainSection'>
                <Switch>
                    <Route exact path='/' component={FeedSection} />
                    <Route path='/products' component={Products} />
                    <Route path='/friends' component={Friends} />
                    <Route path='/tickets' component={Tickets} />
                    <Route path='/report' component={Report} />                    
                </Switch>
            </div>
        );
    }
}

export default MainSection;