import * as React from 'react';

interface IDropDownProps {
    values: any
}

class DropDown extends React.Component<IDropDownProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <select>
                {
                    this.props.values.map(function (object: any) {
                        return <option key={object.id}>{object.name}</option>;
                    })
                }
            </select>
        );
    }
}

export default DropDown;