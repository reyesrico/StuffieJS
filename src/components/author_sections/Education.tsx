import * as React from 'react';
import IContentProps from './IContentProps';

class Education extends React.Component<IContentProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        var id = 0;
        return (
            <div className={this.props.className} id={this.props.id}>
                <h2>Education</h2>
                {
                    this.props.data.map(function (edu: any) {
                        id++;
                        return (
                            <div className="author-subsection" key={`edu_${id}`}>
                                <h3>{edu.university}</h3>
                                <div className="author-subsection-date">{edu.date}</div>
                                <hr />
                                <div className="author-subsection-title">{edu.degree}</div>
                                <div className="author-subsection-university">{edu.university}</div>
                                <div className="author-subsection-dissertation">{edu.dissertation}</div>
                            </div>
                        );
                    }, id)
                }
            </div>
        )
    }
}

export default Education;