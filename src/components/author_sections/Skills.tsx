import * as React from 'react';
import IContentProps from './IContentProps';

class Skills extends React.Component<IContentProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        var id = 0;
        return (
            <div className={this.props.className} id={this.props.id}>
                <h2>Skills</h2>
                {
                    this.props.data.map(function (skill: any) {
                        id++;
                        return (
                            <div className="author-subsection" key={`skill_${id}`}>
                                <h3>{skill.name}</h3>
                                <hr />
                                <div className="author-subsection-technologies">{skill.technologies}</div>
                            </div>
                        );
                    }, id)
                }
            </div>
        )
    }
}

export default Skills;