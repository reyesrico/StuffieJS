import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Image from '../web_objects/Image';

class Menu extends React.Component {

    constructor(props: any) {
        super(props);
        // this.handleScroll = this.handleScroll.bind(this);
        // this.isScrolledIntoView = this.isScrolledIntoView.bind(this);
    }

    // handleScroll(event: any) {
    //     var divs = document.getElementsByClassName('author-menuitem');
    //     for (var i = 0; i < divs.length; i++) {
    //         if (this.isScrolledIntoView(divs[i])) {
    //             console.log(`if: ${divs[i].textContent}`)
    //             divs[i].className = ".author-menuitemvisible";
    //         }
    //         else {
    //             console.log(`else: ${divs[i].textContent}`)                
    //             divs[i].className = ".author-menuitem";
    //         }
    //     }
    // }

    // isScrolledIntoView(elem: Element) {
    //     var docViewTop = window.scrollY;
    //     var docViewBottom = docViewTop + window.innerHeight;

    //     var elemTop = elem.getBoundingClientRect().top;
    //     var elemBottom = elemTop + elem.clientHeight;

    //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    // }

    // componentDidUpdate() {
    //     window.addEventListener('scroll', this.handleScroll);        
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

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
                    <a href="#experience"><div className="author-menuitem">Work Experience</div></a>
                    <a href="#education"><div className="author-menuitem">Education</div></a>
                    <a href="#portfolio"><div className="author-menuitem">Portfolio</div></a>
                    <a href="#skills"><div className="author-menuitem">Skills</div></a>
                    <a href="#awards"><div className="author-menuitem">Awards</div></a>
                    <a href="#certifications"><div className="author-menuitem">Certifications</div></a>
                    <a href="#research"><div className="author-menuitem">Research</div></a>
                </div>
            </div>
        );
    }
}

export default Menu;