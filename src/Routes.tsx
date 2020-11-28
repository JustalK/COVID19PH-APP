import React from 'react';

import Menu from 'src/Menu';
import Stats from 'src/Stats';
import Home from 'src/Home';

export default class Routes extends React.Component {

	static get_all_routes(): {path: string, name: string, page: React.ReactNode}[] {
		return [{
			path: '/stats',
			name: 'General',
			page: <Stats />
		},
		{
			path: '/menu',
			name: 'Menu',
			page: <Menu page="Menu" />
		},
		{
			path: '/',
			name: 'Home',
			page: <Home />
		}];
	}
}
