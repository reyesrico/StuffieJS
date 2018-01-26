import * as React from 'react';

interface ITextFieldProps{
    type: string,
    name: string,
    value: string,
    hintText: string,
    onChange: any
}

class TextField extends React.Component<ITextFieldProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                placeholder={this.props.hintText}
                onChange={this.props.onChange}
             />
        );
    }
}

export default TextField;