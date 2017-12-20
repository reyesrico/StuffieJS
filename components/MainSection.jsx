import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedSection from './FeedSection.jsx';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainsection'>
                <Switch>
                    <Route exact path='/' component={FeedSection} />
                </Switch>
            </div>
        );
    }
}

export default MainSection;