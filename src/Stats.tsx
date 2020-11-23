import React from 'react';
import 'src/less/stats.less';

import { StatsProps, StatsStates } from 'src/interfaces/Stats';

export default class Stats extends React.Component<StatsProps, StatsStates> {

	render(): React.ReactNode {
		return (
			<div id="STATS">
				<header></header>
			</div>
		)
	}
}
