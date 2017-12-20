import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute.jsx';

class Stuffie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (            
            <AuthRoute />
        );
    }
}

render(
    <BrowserRouter>
        <Stuffie />
    </BrowserRouter>,
    document.getElementById('stuffie')
);
