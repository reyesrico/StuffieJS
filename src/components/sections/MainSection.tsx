import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedSection from '../Feed';
import Products from '../Products';
import Friends from '../Friends';
import Tickets from '../Tickets';
import Report from '../Report';

class MainSection extends React.Component {
    constructor(props: any) {
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