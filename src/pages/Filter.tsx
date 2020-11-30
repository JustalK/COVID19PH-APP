import React from 'react';
import 'src/less/listing.less';
import Menu from 'src/pages/Menu';

export default class Listing extends React.Component {
	render(): React.ReactNode {

		return (
			<div id="LISTING">
				<Menu page="All Cases" />
				<div id="WRAPPER">
					Listing
				</div>
			</div>
		);
	}
}
