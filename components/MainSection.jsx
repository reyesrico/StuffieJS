import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedSection from './FeedSection.jsx';
import Welcome from './Welcome.jsx';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainsection'>
                <Switch>
                    <Route exact path='/' component={FeedSection} />
                    <Route path='/login' component={Welcome} />
                </Switch>
            </div>
        );
    }
}

export default MainSection;