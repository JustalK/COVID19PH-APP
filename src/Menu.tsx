import React from 'react';
import 'src/less/libs/menu.less';

import { MenuProps, MenuStates } from 'src/interfaces/Menu';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component<MenuProps, MenuStates> {
	constructor(props: MenuProps) {
		super(props);
	}

	render(): React.ReactNode {
		return (
			<div id="MENU">
				<nav>
					<Link to="/menu">☰</Link>
					<span>{this.props.page}</span>
					<Link to="/menu">?</Link>
				</nav>
				<div id="WRAPPER">
					<ul>
						<li><Link to="/menu">as da sd</Link></li>
						<li><Link to="/menu">a sdasd</Link></li>
						<li><Link to="/menu">asdsds asd</Link></li>
						<li><Link to="/menu">asdasda dsasd</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}
