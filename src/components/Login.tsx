import * as React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from './web_objects/TextField';
import Users from '../models/Users';

interface ILoginState {
    mail: string,
    password: string,
    redirectToNewPage: boolean
}

class Login extends React.Component<{}, ILoginState> {
    constructor(props: any) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            redirectToNewPage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        var user = {
            params: {
                mail: this.state.mail,
                pass: this.state.password
            }
        };

        var login = this;

        const params = new URLSearchParams({
            mail: user.params.mail,
            pass: user.params.pass
        });
        
        fetch(url + '?' + params.toString())
            .then(function (res: any) {
                return res.json();
            })
            .then(function (data: any) {
                console.log("data: " + data);
                localStorage.setItem('username', data.mail);
                localStorage.setItem('password', data.pass);
                localStorage.setItem('name', data.name);
                login.setState({ redirectToNewPage: true })
                alert("Login Successful using DB");
            })
            .catch(function (err: any) {
                console.error("err: " + err);
                var users = new Users();
                const current_user = users.getUser(login.state.mail);
                if (current_user !== undefined) {
                    localStorage.setItem('username', login.state.mail);
                    localStorage.setItem('password', login.state.password);
                    localStorage.setItem('name', current_user.name);
                    alert("Login Successful using Data");
                    login.setState({ redirectToNewPage: true });
                }
            });
    }

    componentWillUpdate() {
        console.log("Waiting to redirect");
        if (this.state.redirectToNewPage) {
            return (<Redirect to='/' />);
        }
    }

    render() {
        return (
            <div className='stuffieLogin'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="mail"
                        name="mail"
                        value={this.state.mail}
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