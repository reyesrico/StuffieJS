import * as React from 'react';
import IContentProps from './IContentProps';

class Experience extends React.Component<IContentProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        var id = 0;
        var act_id = 0;        
        return (
            <div className={this.props.className} id={this.props.id}>
                <h2>Work Experience</h2>
                {                    
                    this.props.data.map(function (exp: any) {
                        id++;                        
                        return (
                            <div className="author-subsection" key={`exp_${id}`}>
                                <h3>{exp.company}</h3>
                                <div className="author-subsection-date">{exp.date}</div>                                
                                <hr />
                                <div className="author-subsection-title">{exp.title}</div>
                                <div className="author-subsection-activities">
                                    {exp.activities.map(function (act: any) {
                                        act_id++;
                                        return <li key={`act_${act_id}`} >{act}</li>
                                    }, act_id)}
                                </div>
                            </div>
                        );
                    }, id, act_id)
                }
            </div>
        )
    }
}

export default Experience;