import React from 'react';
import 'src/less/libs/menu.less';

import { MenuProps, MenuStates } from 'src/interfaces/Menu';
import { Link } from 'react-router-dom';
import Routes from 'src/components/Routes';

import { MenuRoutes } from 'src/interfaces/Routes';

export default class Menu extends React.Component<MenuProps, MenuStates> {
	constructor(props: MenuProps) {
		super(props);
	}

	render_menu(): React.ReactNode {
		let routes: MenuRoutes[] = Routes.get_all_routes();
		const indexMenu: number = routes.findIndex((r: MenuRoutes) => r.path === '/menu');
		routes.splice(indexMenu, 1);

		return (
			<div id="WRAPPER">
				<ul>
					{routes.map((route_obj, index) => {
						return <li key={index}><Link to={route_obj.path}>{route_obj.name}</Link></li>;
					})}
				</ul>
			</div>
		)
	}

	render(): React.ReactNode {
		return (
			<div id="MENU">
				<nav>
					<Link to="/menu">☰</Link>
					<span>{this.props.page}</span>
					<Link to="/filter">?</Link>
				</nav>
				{this.props.page === 'Menu' && this.render_menu()}
			</div>
		);
	}
}
