import React from 'react';
import ReactDOM from 'react-dom';
import 'src/less/libs/main.less';
import Home from 'src/Home';
import Stats from 'src/Stats';
import reportWebVitals from 'src/reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

ReactDOM.render(
	<Router>
		<TransitionGroup>
			<CSSTransition<undefined>
				addEndListener={(node: HTMLElement, done: () => void) => {
					return;
				}}>
				<Switch>
					<Route path="/stats">
						<Stats />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
