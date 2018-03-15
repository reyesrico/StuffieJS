import * as React from 'react';
import Image from '../web_objects/Image';

class Cover extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="author-cover">
                <Image pic='banner.jpg' className='banner' />
            </div>
        );
    }
}

export default Cover;