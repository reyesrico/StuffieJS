import React from 'react';
import WelcomeBar from './WelcomeBar.jsx';
import News from './News.jsx';
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
                <WelcomeBar />
                <News />
                <div className='stuffieInfo'>
                    <Login />
                    <Register />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Welcome;