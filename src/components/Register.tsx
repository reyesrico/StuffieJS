import * as React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from './web_objects/TextField';

var axios = require('axios');

interface IRegisterState {
    mail: string,
    password: string,
    name: string,
    redirectToNewPage: boolean
}

class Register extends React.Component<{}, IRegisterState> {
    constructor(props: any) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            name: '',
            redirectToNewPage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.mail.length > 0 && this.state.password.length > 0 && this.state.name.length > 0;
    }

    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        var url = 'http://localhost:3001/api/users';
        var user = { mail: this.state.mail, pass: this.state.password, name: this.state.name };
        console.log("url: " + url);

        axios.post(url, user)
            .then(function (res: any) {
                console.log("entra res");
            })
            .catch(function (err: any) {
                console.error(err);
            });

        alert("User Registered!");

        return (<Redirect to='/' />);
        // var users = new Users();
        // var current_user = users.getUser(this.state.mail);
        // if (current_user === undefined) {
        //     users.setUser({ "mail": this.state.mail, "pass": this.state.password, "name": this.state.name });
        // }
        // else {
        //     alert("User already registered");
        // }
        // localStorage.setItem('username', this.state.name);
        // localStorage.setItem('password', this.state.password);
        // alert("Register successful");
        // this.setState({ redirectToNewPage: true });
        // event.preventDefault();
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
                            type="text"
                            name="mail"
                            value={this.state.mail}
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
                    <div className='registerName'>
                        <TextField
                            type="text"
                            name="name"
                            value={this.state.name}
                            hintText="User Name"
                            onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        );
    }
}

export default Register;