import React from 'react';
import ReactDOM from 'react-dom';
import 'src/less/libs/main.less';
import Home from 'src/Home';
import reportWebVitals from 'src/reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
