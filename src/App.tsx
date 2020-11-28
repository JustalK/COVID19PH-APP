import React from 'react';
import 'src/less/libs/main.less';
import Home from 'src/Home';
import Stats from 'src/Stats';
import Menu from 'src/Menu';
import Routes from 'src/Routes';
import { AppProps, AppStates } from 'src/interfaces/App';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends React.Component<RouteComponentProps, any> {

	render(): React.ReactNode {
		const { match, location, history } = this.props;

		return (
			<TransitionGroup>
				<CSSTransition<undefined> key={location.key} classNames="transition" timeout={1000}>
					<Switch location={location}>
						{Routes.get_all_routes().map((route_obj, index) => {
							return <Route key={index} path={route_obj.path}>{route_obj.page}</Route>;
						})}
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		);
	}
}

export default withRouter(App);
