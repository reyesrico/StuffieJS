import * as React from 'react';

interface IImageProps{
    pic: string,
    className: string
}

interface IImageState{
    src: string
}

class Image extends React.Component<IImageProps, IImageState> {
    constructor(props: any){
        super(props);
        this.state = {
            src: `assets/${this.props.pic}`
        }
    }

    render() {
        return (
            <img src={this.state.src} {...this.props} />
        );
    }
}

export default Image;