import * as React from 'react';
import IContentProps from './IContentProps';

class Research extends React.Component<IContentProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        var id = 0;
        return (
            <div className={this.props.className} id={this.props.id}>
                <h2>Research</h2>
                {
                    this.props.data.map(function (paper: any) {
                        id++;
                        return (
                            <div className="author-subsection" key={`paper_${id}`}>
                                <h3>{paper.title}</h3>
                                <hr />
                                <div className="author-subsection-authors">{paper.authors}</div>
                                <div className="author-subsection-institution">{paper.institution}</div>
                                <div className="author-subsection-date">{paper.date}</div>
                                <div className="author-subsection-place">{paper.place}</div>
                                <div className="author-subsection-note">{paper.note}</div>
                            </div>
                        );
                    }, id)
                }
            </div>
        )
    }
}

export default Research;