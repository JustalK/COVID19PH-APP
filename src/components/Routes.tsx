import React from 'react';

import Menu from 'src/pages/Menu';
import Stats from 'src/pages/Stats';
import Home from 'src/pages/Home';
import Filter from 'src/pages/Filter';

import { MenuRoutes } from 'src/interfaces/Routes';

export default class Routes extends React.Component {

	static get_all_routes(): MenuRoutes[] {
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
			path: '/filter',
			name: 'Filter',
			page: <Filter />
		},
		{
			path: '/',
			name: 'Home',
			page: <Home />
		}];
	}
}
