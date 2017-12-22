import React from 'react';

class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            src: `../assets/${this.props.pic}`
        }
    }

    render() {
        return (
            <img src={this.state.src} {...this.props} />
        );
    }
}

export default Image;