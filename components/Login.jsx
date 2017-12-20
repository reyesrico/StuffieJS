import React from 'react';
import  { Redirect } from 'react-router-dom';
import TextField from './TextField.jsx';
import Users from '../objects/Users.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.username > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        var users = new Users();
        var current_user = users.getUser(this.state.username);
        if (current_user !== undefined) {
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            alert("Login successful");
            //<Redirect to='/' />
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="mail"
                        name="username"
                        value={this.state.username}
                        hintText="Enter your Username"
                        onChange={this.handleChange} />
                    <TextField
                        type="password"
                        name="password"
                        hintText="Enter your Password"
                        onChange={this.handleChange} />
                    <input type="submit" value="Login" />
                </form>
                <hr />
            </div>
        );
    }
}

export default Login;