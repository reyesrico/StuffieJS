import * as React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from './web_objects/TextField';
import Users from '../models/Users';

interface ILoginState {
    username: string,
    password: string,
    redirectToNewPage: boolean
}

class Login extends React.Component<{}, ILoginState> {
    constructor(props: any) {
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
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event: any) {
        var users = new Users();
        var current_user = users.getUser(this.state.username);
        if (current_user !== undefined) {
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            alert("Login successful");
            this.setState({ redirectToNewPage: true });
        }
        event.preventDefault();
    }

    render() {
        if(this.state.redirectToNewPage) {
            return (<Redirect to='/' />);
        }
        return (
            <div className='stuffieLogin'>
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
                        value={this.state.password}
                        hintText="Enter your Password"
                        onChange={this.handleChange} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;