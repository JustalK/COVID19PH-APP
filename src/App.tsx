import React from 'react';
import 'src/less/app.less';

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
			<div id="APP">
				<header></header>
				<div className="container">
					<span className="app_name"><em>covid</em>19<em>ph</em><em>app</em></span>
					<a href="#" onClick={this.handleClick}>Explore the impact</a>
					<span className="total_cases">There are actually <em>{this.state.total_cases}</em> cases in the Philippines.</span>
				</div>
			</div>
		);}
}
