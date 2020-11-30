import React from 'react';
import 'src/less/filter.less';
import Menu from 'src/pages/Menu';

export default class Filter extends React.Component {
	render(): React.ReactNode {

		return (
			<div id="FILTER">
				<Menu page="Filter" />
				<div id="WRAPPER">
					Filter
				</div>
			</div>
		);
	}
}
