import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login.jsx';
import MainPage from './MainPage.jsx';

class Stuffie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        if (localStorage && localStorage.getItem('username') && localStorage.getItem('password')) {
            this.state.username = localStorage.getItem('username');
            this.state.password = localStorage.getItem('password');
        }
    }

    render() {
        <Switch>
            <Route exact path='/' component={Stuffie}/>
            <Route path='/login' component={Login}/>
        </Switch>

        if (this.state && this.state.username !== '') {
            return (<MainPage />);
        }
        return (<Login />);
    }
}

render(
    <BrowserRouter>
        <Stuffie />
    </BrowserRouter>, 
    document.getElementById('stuffie')
);
