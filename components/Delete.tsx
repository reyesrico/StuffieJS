import * as React from 'react';

interface IMyComponentProps {
    someDefaultValue: string
}

interface IMyComponentState {
    someValue: string
}

export default class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
    constructor(props : IMyComponentProps) {
        super(props);
        this.state = { someValue: this.props.someDefaultValue };
    }

    public render() {
        return (
            <div>
                Value set as {this.state.someValue}
            </div>
        );
    }
}