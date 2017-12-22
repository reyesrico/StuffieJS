import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select>
                {
                    this.props.values.map(function (object) {
                        return <option key={object.id}>{object.name}</option>;
                    })
                }
            </select>
        );
    }
}

export default DropDown;