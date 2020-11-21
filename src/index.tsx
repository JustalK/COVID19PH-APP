import React from 'react';
import ReactDOM from 'react-dom';
import 'src/less/main.less';
import App from 'src/App';
import reportWebVitals from 'src/reportWebVitals';
import { Case } from "src/interfaces/Case";

import { CaseApi } from 'src/services/CaseApi';
import { apiConfig } from 'src/config/api.config';

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
