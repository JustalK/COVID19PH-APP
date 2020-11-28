import React from 'react';
import 'src/less/libs/menu.less';

import { MenuProps, MenuStates } from 'src/interfaces/Menu';
import { Link } from 'react-router-dom';
import Routes from 'src/Routes';

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
						{Routes.get_all_routes().map((route_obj, index) => {
							return <li key={index}><Link to={route_obj.path}>{route_obj.name}</Link></li>;
						})}
					</ul>
				</div>
			</div>
		);
	}
}
