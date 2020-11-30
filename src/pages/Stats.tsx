import React from 'react';
import 'src/less/stats.less';

import { StatsProps, StatsStates } from 'src/interfaces/Stats';
import Menu from 'src/pages/Menu';

import CanvasJSReact from 'src/assets/libs/canvasjs.react';
import TypeCanvasJS from 'canvasjs';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { canvasConfig } from 'src/config/canvas.config';

export default class Stats extends React.Component<StatsProps, StatsStates> {
	chart: TypeCanvasJS.Chart;

	constructor(props: StatsProps) {
		super(props);
		this.state = {
			points: [{x: new Date(), y: '0'}]
		};
	}

	async componentDidMount(): Promise<void> {
		const response = await fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json');
		const datas = await response.json();
		const datas_reduced = datas.slice(0, 4);
		const points = datas_reduced.map((d: {x: string, y: string}) => ({
			x: new Date(d.x),
			y: d.y
		}));
		this.setState({ points });
		this.chart.render();
	}

	render(): React.ReactNode {
		const options = canvasConfig;
		Object.assign(options.data[0], {dataPoints: this.state.points});

		return (
			<div id="STATS">
				<Menu page="General" />
				<div id="WRAPPER">
					<span className="headline">COVID impact in the Philippines</span>
					<div className="graph">
						<CanvasJSChart options={canvasConfig}
							onRef={(ref: any) => this.chart = ref}
						/>
					</div>
					<ul className="resume">
						<li><em className="color-only up">500,000</em><span>Total Cases</span></li>
						<li><em className="color-only down">123,000</em><span>Total Women</span></li>
						<li><em className="color-only up">256,000</em><span>Total Men</span></li>
					</ul>
					<ul className="details">
						<li><span>Number of children affected</span><em className="up">12,030</em></li>
						<li><span>Number of baby under 6 years old affected</span><em className="down">12,030</em></li>
						<li><span>Number of older over 60 years old affected</span><em  className="up">1,200</em></li>
						<li><span>Number of people recovered</span><em  className="up">100,200</em></li>
						<li><span>Number of people infected</span><em  className="up">200,200</em></li>
						<li><span>Number of people dead</span><em  className="up">10,200</em></li>
						<li><span>Area the most affected</span><em  className="up">Batangas</em></li>
					</ul>
				</div>
			</div>
		);
	}
}
