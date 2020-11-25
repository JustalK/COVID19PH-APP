import React from 'react';
import 'src/less/stats.less';

import { StatsProps, StatsStates } from 'src/interfaces/Stats';
import Menu from 'src/Menu';

import CanvasJSReact from 'src/assets/libs/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const dataPoints: any =[];
export default class Stats extends React.Component<StatsProps, StatsStates> {
	chart: any;

	componentDidMount(){
		const chart = this.chart;
		fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				for (let i = 0; i < data.length; i++) {
					dataPoints.push({
						x: new Date(data[i].x),
						y: data[i].y
					});
				}
				chart.render();
			});
	}

	render(): React.ReactNode {
		const options = {
			height: 260,
			theme: 'light2',
			axisY: {
				title: '',
				tickLength: 0,
				lineThickness: 0,
				gridThickness: 0,
				margin: 0,
				labelFormatter: function(e: any) {
					return '';
				}
			},
			axisX: {
				gridThickness: 100,
				gridColor: '#11a389',
				labelFontColor: 'black',
				tickColor: 'white',
				lineColor: 'white'

			},
			data: [{
				lineColor: 'red',
				color: 'blue',
				type: 'line',
				xValueFormatString: 'MMM YYYY',
				dataPoints: dataPoints
			}]
		};

		return (
			<div id="STATS">
				<Menu />
				<div className="wrapper">
					<span><em>500,000</em> cases in the Philippines</span>
					<div className="graph">
						<CanvasJSChart options={options}
							onRef={(ref: any) => this.chart = ref}
						/>
					</div>
				</div>
			</div>
		);
	}
}
