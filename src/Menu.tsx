import React from 'react';
import 'src/less/libs/menu.less';

import { MenuProps, MenuStates } from 'src/interfaces/Menu';

export default class Menu extends React.Component<MenuProps, MenuStates> {

	render(): React.ReactNode {
		return (
			<nav id="MENU">
				<a>☰</a>
				<a>?</a>
			</nav>
		)
	}
}
