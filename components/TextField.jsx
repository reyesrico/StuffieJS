import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }    

    render(){
        let autofocus = this.props.autofocus!==undefined? "autofocus" : "";
        return (
            <input type={this.props.type} value={this.props.value} placeholder={this.props.hintText} onChange={this.props.onChange} autofocus />            
        );
    }
}

export default TextField;