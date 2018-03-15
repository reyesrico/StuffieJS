import * as React from 'react';
import IContentProps from './IContentProps';

class Portfolio extends React.Component<IContentProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        var id = 0;
        return (
            <div className={this.props.className} id={this.props.id}>
                <h2>Portfolio</h2>
                {
                    this.props.data.map(function (ptf: any) {
                        id++;
                        return (
                            <div className="author-subsection" key={`pft_${id}`}>
                                <h3>{ptf.name}</h3>
                                <hr />
                                <div className="author-subsection-description">{ptf.description}</div>
                                <div className="author-subsection-code">{ptf.code}</div>
                                <div className="author-subsection-date">{ptf.date}</div>
                                <div className="author-subsection-skills">{ptf.skills}</div>
                            </div>
                        );
                    }, id)
                }
            </div>
        )
    }
}

export default Portfolio;