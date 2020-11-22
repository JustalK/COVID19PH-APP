import React from 'react';
import logo from 'src/logo.svg';
import 'src/less/main.less';

import { CaseApi } from 'src/services/CaseApi';
import { apiConfig } from 'src/config/api.config';

import { TotalCases, FailureTotalCases } from 'src/interfaces/Case';

import { AppProps, AppStates } from 'src/interfaces/App';

export default class App extends React.Component<AppProps, AppStates> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			total_cases: 0
		};
	}

	async componentDidMount(): Promise<void> {
		const case_api: CaseApi = new CaseApi(apiConfig);
		const total: TotalCases | FailureTotalCases = await case_api.get_total_cases();
		const total_cases: number =  total.total_cases;
		this.setState({ total_cases });
	}

	handleClick(e: React.MouseEvent): void {
		e.preventDefault();
		console.log('The link was clicked.');
		return;
	}

	render(): React.ReactNode {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload. {this.state.total_cases}
					</p>
					<a href="#" onClick={this.handleClick}>
						Click me
					</a>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);}
}
