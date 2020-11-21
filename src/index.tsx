import React from 'react';
import ReactDOM from 'react-dom';
import './less/main.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Case } from "./interfaces/Case";

import { CaseApi } from './services/CaseApi';
import { apiConfig } from './config/api.config';

const lol = async () => {
	const rofl: CaseApi = new CaseApi(apiConfig);
	const cases = await rofl.get_all_cases();
	console.log(cases);
}
lol();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
