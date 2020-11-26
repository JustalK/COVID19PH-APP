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
			<nav id="MENU">
				<Link to="/menu">☰</Link>
				<span>{this.props.page}</span>
				<Link to="/menu">?</Link>
			</nav>
		)
	}
}
