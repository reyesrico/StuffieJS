import React from 'react';
import Image from './web_objects/Image.jsx';

class WelcomeBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='welcomeBar'>
              <Image pic='logo.png' className='bigLogo' />
              <div className='stuffieTitle'>Stuffie</div>
              <div className='stuffieSlogan'>Connecting life</div>
            </div>
        );
    }
}

export default WelcomeBar;