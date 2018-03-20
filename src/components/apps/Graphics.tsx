import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

interface iBarChartRow {
    name: string,
    uv: number,
    pv: number,
    amt: number
}


class Graphics extends React.Component {

    barChartData: iBarChartRow[];

    constructor(props: any) {
        super(props);

        this.barChartData = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
        ];

    }

    render() {
        return (
            <div>
                <BarChart width={600} height={300} data={this.barChartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>

                <LineChart width={600} height={300} data={this.barChartData}>
                    <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
        );
    }
}

export default Graphics;