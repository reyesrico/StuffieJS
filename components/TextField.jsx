import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }    

    render(){
        return (
            <input type={this.props.type} name={this.props.name} value={this.props.value} placeholder={this.props.hintText} onChange={this.props.onChange} focus={this.props.autofocus} />
        );
    }
}

export default TextField;