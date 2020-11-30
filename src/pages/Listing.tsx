import React from 'react';
import 'src/less/filter.less';
import Menu from 'src/pages/Menu';
import { ListingProps, ListingStates } from 'src/interfaces/Listing';

export default class Listing extends React.Component<ListingProps, ListingStates> {
	constructor(props: ListingProps) {
		super(props);
		this.state = {
			total_cases: []
		};
	}

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
