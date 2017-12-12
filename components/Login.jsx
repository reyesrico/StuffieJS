import React from 'react';
import { render } from 'react-dom';
import TextField from './TextField.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    validateForm() {
        return this.state.username > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        autofocus
                        type="mail"
                        value={this.state.username}
                        hintText="Enter your Username"
                        onChange={this.handleChange} />
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        onChange={this.handleChange} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

render(<Login />, document.getElementById('login'));


//export default Login;