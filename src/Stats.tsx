import React from 'react';
import 'src/less/stats.less';

import { StatsProps, StatsStates } from 'src/interfaces/Stats';
import Menu from 'src/Menu';

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
		const points = datas.map((d: {x: string, y: string}) => ({
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
				<Menu />
				<div className="wrapper">
					<span><em>500,000</em> cases in the Philippines</span>
					<div className="graph">
						<CanvasJSChart options={canvasConfig}
							onRef={(ref: any) => this.chart = ref}
						/>
					</div>
				</div>
			</div>
		);
	}
}
