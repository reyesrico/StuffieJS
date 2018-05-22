import * as React from 'react';

interface ITestProps {
    rows: number;
    cols: number;
}

class Test extends React.Component<ITestProps, {}> {

    constructor(props: any) {
        super(props);
        this.getRowsX = this.getRowsX.bind(this);
    }

    getRowsX() {
        var res = [];
        for (var i = 0; i < this.props.rows; i++) {
            var rowRes = '';
            for (var j = 0; j < this.props.cols; j++) {
                if (i == 0 || i == this.props.rows - 1) {
                    rowRes += '#';
                }
                else {
                    if (j == i || j == this.props.cols - i) {
                        rowRes += '#';
                    }
                    else {
                        rowRes += ' ';
                    }
                }
            }                        
            res.push({id: i, row: rowRes});
        }
        return res;
    }

    render() {
        return (
            <div>
                {
                    this.getRowsX().map((row) => {
                        return <div key={row.id}>{row.row.replace(/ /g, "\u00a0")}</div>
                    })
                }
            </div>
        )
    }
}

export default Test; 