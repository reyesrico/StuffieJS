import * as React from 'react';
import IContentProps from './IContentProps';

class Awards extends React.Component<IContentProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        var id = 0;
        return (
            <div className={this.props.className} id={this.props.id}>
                <h2>Awards</h2>
                {
                    this.props.data.map(function (award: any) {
                        id++;
                        return (
                            <div className="author-subsection" key={`award_${id}`}>
                                <h3>{award.name}</h3>
                                <hr />
                                <div className="author-subsection-institution">{award.institution}</div>
                                <div className="author-subsection-year">{award.year}</div>
                            </div>
                        );
                    }, id)
                }
            </div>
        )
    }
}

export default Awards;