import * as React from 'react';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Awards from './Awards';
import Certifications from './Certifications';
import Research from './Research';

var content = require('../../data/content.json');

class Content extends React.Component {

    className: string;

    constructor(props: any) {
        super(props);
        this.className = 'author-section';
    }

    render() {
        return (
            <div className="author-content">
                <Experience data={content.Experience} className={this.className} id="experience" />
                <Education data={content.Education} className={this.className} id="education" />
                <Portfolio data={content.Portfolio} className={this.className} id="portfolio" />
                <Skills data={content.Skills} className={this.className} id="skills" />
                <Awards data={content.Awards} className={this.className} id="awards" />
                <Certifications data={content.Certifications} className={this.className} id="certifications" />
                <Research data={content.Research} className={this.className} id="research" />
            </div>
        );
    }
}

export default Content;