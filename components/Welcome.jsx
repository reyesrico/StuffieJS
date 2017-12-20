import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Footer from './Footer.jsx';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='stuffie'>
                <div className='stuffieLogin'>                
                    <Login />
                </div>
                <div className='stuffieRegister'>
                    <Register />
                </div>
            </div>
        );
    }
}

export default Welcome;