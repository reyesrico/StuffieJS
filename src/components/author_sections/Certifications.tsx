import * as React from 'react';
import IContentProps from './IContentProps';

class Certifications extends React.Component<IContentProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        var id = 0;
        return (
            <div className={this.props.className} id={this.props.id}>
                <h2>Certifications</h2>
                {
                    this.props.data.map(function (cert: any) {
                        id++;
                        return (
                            <div className="author-subsection" key={`cert_${id}`}>
                                <h3>{cert.name}</h3>
                                <hr />
                                <div className="author-subsection-institution">{cert.institution}</div>
                                <div className="author-subsection-year">{cert.year}</div>
                            </div>
                        );
                    }, id)
                }
            </div>
        )
    }
}

export default Certifications;