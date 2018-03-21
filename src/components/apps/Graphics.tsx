import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { Treemap } from 'recharts';
import { PieChart, Pie } from 'recharts';
import { ScatterChart, ZAxis, Scatter } from 'recharts';
import { RadialBarChart, RadialBar, RadialBarData } from 'recharts';

interface iBarChartRow {
    name: string,
    uv: number,
    pv: number,
    amt: number
}


class Graphics extends React.Component {

    barChartData: iBarChartRow[];
    treemapChartData: any[];
    pieChartData01: any[];
    pieChartData02: any[];
    radialChartData: any[];

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

        this.treemapChartData = [
            {
                name: 'axis',
                children: [
                    { name: 'Axes', size: 1302 },
                    { name: 'Axis', size: 24593 },
                    { name: 'AxisGridLine', size: 652 },
                    { name: 'AxisLabel', size: 636 },
                    { name: 'CartesianAxes', size: 6703 },
                ],
            },
            {
                name: 'controls',
                children: [
                    { name: 'AnchorControl', size: 2138 },
                    { name: 'ClickControl', size: 3824 },
                    { name: 'Control', size: 1353 },
                    { name: 'ControlList', size: 4665 },
                    { name: 'DragControl', size: 2649 },
                    { name: 'ExpandControl', size: 2832 },
                    { name: 'HoverControl', size: 4896 },
                    { name: 'IControl', size: 763 },
                    { name: 'PanZoomControl', size: 5222 },
                    { name: 'SelectionControl', size: 7862 },
                    { name: 'TooltipControl', size: 8435 },
                ],
            },
            {
                name: 'data',
                children: [
                    { name: 'Data', size: 20544 },
                    { name: 'DataList', size: 19788 },
                    { name: 'DataSprite', size: 10349 },
                    { name: 'EdgeSprite', size: 3301 },
                    { name: 'NodeSprite', size: 19382 },
                    {
                        name: 'render',
                        children: [
                            { name: 'ArrowType', size: 698 },
                            { name: 'EdgeRenderer', size: 5569 },
                            { name: 'IRenderer', size: 353 },
                            { name: 'ShapeRenderer', size: 2247 },
                        ],
                    },
                    { name: 'ScaleBinding', size: 11275 },
                    { name: 'Tree', size: 7147 },
                    { name: 'TreeBuilder', size: 9930 },
                ],
            },
            {
                name: 'events',
                children: [
                    { name: 'DataEvent', size: 7313 },
                    { name: 'SelectionEvent', size: 6880 },
                    { name: 'TooltipEvent', size: 3701 },
                    { name: 'VisualizationEvent', size: 2117 },
                ],
            },
            {
                name: 'legend',
                children: [
                    { name: 'Legend', size: 20859 },
                    { name: 'LegendItem', size: 4614 },
                    { name: 'LegendRange', size: 10530 },
                ],
            },
            {
                name: 'operator',
                children: [
                    {
                        name: 'distortion',
                        children: [
                            { name: 'BifocalDistortion', size: 4461 },
                            { name: 'Distortion', size: 6314 },
                            { name: 'FisheyeDistortion', size: 3444 },
                        ],
                    },
                    {
                        name: 'encoder',
                        children: [
                            { name: 'ColorEncoder', size: 3179 },
                            { name: 'Encoder', size: 4060 },
                            { name: 'PropertyEncoder', size: 4138 },
                            { name: 'ShapeEncoder', size: 1690 },
                            { name: 'SizeEncoder', size: 1830 },
                        ],
                    },
                    {
                        name: 'filter',
                        children: [
                            { name: 'FisheyeTreeFilter', size: 5219 },
                            { name: 'GraphDistanceFilter', size: 3165 },
                            { name: 'VisibilityFilter', size: 3509 },
                        ],
                    },
                    { name: 'IOperator', size: 1286 },
                    {
                        name: 'label',
                        children: [
                            { name: 'Labeler', size: 9956 },
                            { name: 'RadialLabeler', size: 3899 },
                            { name: 'StackedAreaLabeler', size: 3202 },
                        ],
                    },
                    {
                        name: 'layout',
                        children: [
                            { name: 'AxisLayout', size: 6725 },
                            { name: 'BundledEdgeRouter', size: 3727 },
                            { name: 'CircleLayout', size: 9317 },
                            { name: 'CirclePackingLayout', size: 12003 },
                            { name: 'DendrogramLayout', size: 4853 },
                            { name: 'ForceDirectedLayout', size: 8411 },
                            { name: 'IcicleTreeLayout', size: 4864 },
                            { name: 'IndentedTreeLayout', size: 3174 },
                            { name: 'Layout', size: 7881 },
                            { name: 'NodeLinkTreeLayout', size: 12870 },
                            { name: 'PieLayout', size: 2728 },
                            { name: 'RadialTreeLayout', size: 12348 },
                            { name: 'RandomLayout', size: 870 },
                            { name: 'StackedAreaLayout', size: 9121 },
                            { name: 'TreeMapLayout', size: 9191 },
                        ],
                    },
                    { name: 'Operator', size: 2490 },
                    { name: 'OperatorList', size: 5248 },
                    { name: 'OperatorSequence', size: 4190 },
                    { name: 'OperatorSwitch', size: 2581 },
                    { name: 'SortOperator', size: 2023 },
                ],
            }
        ];


        this.pieChartData01 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 }
        ];

        this.pieChartData02 = [
            { name: 'A1', value: 100 },
            { name: 'A2', value: 300 },
            { name: 'B1', value: 100 },
            { name: 'B2', value: 80 },
            { name: 'B3', value: 40 },
            { name: 'B4', value: 30 },
            { name: 'B5', value: 50 },
            { name: 'C1', value: 100 },
            { name: 'C2', value: 200 },
            { name: 'D1', value: 150 },
            { name: 'D2', value: 50 }
        ];

        this.radialChartData = [
            { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
            { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
            { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
            { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
            { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
            { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
            { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' }
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
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>

                <AreaChart width={730} height={250} data={this.barChartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>

                <Treemap
                    width={730}
                    height={250}
                    data={this.treemapChartData}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                />

                <PieChart width={800} height={400}>
                    <Pie dataKey="value" data={this.pieChartData01} cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                    <Pie dataKey="value" data={this.pieChartData02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>

                <ScatterChart width={730} height={250}
                    margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="value" name="stature" unit="cm" />
                    <YAxis dataKey="value" name="weight" unit="cm" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Data01" data={this.pieChartData01} fill="#8884d8" />
                    <Scatter name="Data02" data={this.pieChartData02} fill="#82ca9d" />
                </ScatterChart>

                <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={this.radialChartData} startAngle={180} endAngle={0}>
                    <RadialBar angleAxisId={15} label={{ fill: '#666', position: 'insideStart' }} background dataKey='uv' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                </RadialBarChart>
            </div>
        );
    }
}

export default Graphics;