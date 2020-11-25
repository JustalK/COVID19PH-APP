import React from 'react';
import 'src/less/home.less';

import philippines from 'src/../public/imgs/philippines.png';
import { Link } from 'react-router-dom';
import { Helper } from 'src/utils/Helper';

import { CaseApi } from 'src/services/CaseApi';
import { apiConfig } from 'src/config/api.config';

import { TotalCases, FailureTotalCases } from 'src/interfaces/Case';

import { HomeProps, HomeStates } from 'src/interfaces/Home';

export default class Home extends React.Component<HomeProps, HomeStates> {
	constructor(props: HomeProps) {
		super(props);
		this.state = {
			total_cases: '0'
		};
	}

	async componentDidMount(): Promise<void> {
		const case_api: CaseApi = new CaseApi(apiConfig);
		const total: TotalCases | FailureTotalCases = await case_api.get_total_cases();
		const total_cases: string =  Helper.number_with_commas(total.total_cases);
		this.setState({ total_cases });
	}

	handleClick(e: React.MouseEvent): void {
		e.preventDefault();
		console.log('The link was clicked.');
		return;
	}

	render(): React.ReactNode {
		return (
			<div id="HOME">
				<div className="container">
					<picture>
						<source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
						<source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
						<img src={philippines} alt="Flowers" />
					</picture>
					<span className="app_name"><em>covid</em>19<em>ph</em><em>app</em></span>
					<Link to="/stats">Explore the impact</Link>
					<span className="total_cases">There are actually <em>{this.state.total_cases}</em> cases in the Philippines.</span>
				</div>
			</div>
		);
	}
}
