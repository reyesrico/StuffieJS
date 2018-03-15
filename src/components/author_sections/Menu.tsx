import * as React from 'react';
import Image from '../web_objects/Image';

class Menu extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="author-menu">
                <div className="author-data">
                    <Image pic="cr2.jpg" className="img-circle" />
                    <h2>Carlos Reyes</h2>
                    <div className="author-socialmedia">
                        <div className="author-smitem"><a>Facebook</a></div>
                        <div className="author-smitem"><a>Twitter</a></div>
                        <div className="author-smitem"><a>Email</a></div>
                    </div>
                </div>
                <div className="author-menulist">
                    <div className="author-menuitem"><a href="#experience">Work Experience</a></div>
                    <div className="author-menuitem"><a href="#education">Education</a></div>
                    <div className="author-menuitem"><a href="#portfolio">Portfolio</a></div>
                    <div className="author-menuitem"><a href="#skills">Skills</a></div>
                    <div className="author-menuitem"><a href="#awards">Awards</a></div>
                    <div className="author-menuitem"><a href="#certifications">Certifications</a></div>
                    <div className="author-menuitem"><a href="#research">Research</a></div>
                </div>
            </div>
        );
    }
}

export default Menu;