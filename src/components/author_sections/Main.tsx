import * as React from 'react';
import Cover from './Cover';
import Content from './Content';
import Menu from './Menu';

class Main extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="author">
                <div className="author-info">
                    <Cover />
                    <Content />
                </div>
                <Menu />
            </div>
        )
    }
}

export default Main;