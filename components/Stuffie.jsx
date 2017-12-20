import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute.jsx';
import Welcome from './Welcome.jsx';
import Footer from './Footer.jsx';

class Stuffie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='stuffie'>
                <Switch>
                    <Route exact path='/' component={AuthRoute} />
                    <Route path='/login' component={Welcome} />
                </Switch>
            </div>
        );
    }
}

render(
    <BrowserRouter>
        <Stuffie />
    </BrowserRouter>,
    document.getElementById('stuffie')
);
