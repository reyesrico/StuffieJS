import * as React from 'react';
import WelcomeBar from './WelcomeBar';
import News from './News';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';

class Welcome extends React.Component {
    constructor(props: any) {
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