import React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from './web_objects/TextField.jsx';
import Users from '../models/Users.jsx';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToNewPage: false
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
        if (current_user === undefined) {
            users.setUser({ "mail": this.state.username, "pass": this.state.password });
        }
        else {
            alert("User already registered");
        }
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        alert("Register successful");
        this.setState({ redirectToNewPage: true });
        event.preventDefault();
    }

    render() {
        if (this.state.redirectToNewPage) {
            return (<Redirect to='/' />);
        }
        return (
            <div className='stuffieRegister'>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='registerMail'>
                        <TextField
                            type="mail"
                            name="username"
                            value={this.state.username}
                            hintText="Email"
                            onChange={this.handleChange} />
                    </div>
                    <div className='registerPass'>
                        <TextField
                            type="password"
                            name="password"
                            value={this.state.password}
                            hintText="New Password"
                            onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Register" disabled />
                </form>
            </div>
        );
    }
}

export default Register;