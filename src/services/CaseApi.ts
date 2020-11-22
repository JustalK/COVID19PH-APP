import { Api } from "src/services/Api"
import { Case, TotalCases, FailureCase, FailureTotalCases } from "src/interfaces/Case"
import { Failure } from "src/interfaces/Failure"
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

export class CaseApi extends Api {
    constructor (config: AxiosRequestConfig) {
        super(config)
    }

	async get_all_cases(): Promise<Case[] | FailureCase> {
		try {
			const res: AxiosResponse<Case[]> = await this.get<Case, AxiosResponse<Case[]>>("/cases");
			return this.success(res);
		} catch (error) {
			const failure: FailureCase = {
				type: 'case',
				message: error.message,
				reason: 'boom'
			};
			return this.error(failure);
		}
	}

	async get_total_cases(): Promise<TotalCases | FailureTotalCases> {
		try {
			const res: AxiosResponse<TotalCases> = await this.get<TotalCases, AxiosResponse<TotalCases>>("/cases/total");
			return this.success(res);
		} catch (error) {
			const failure: FailureTotalCases = {
				type: 'case',
				message: error.message,
				reason: 'boom',
				total_cases: 0
			};
			return this.error(failure);
		}
	}
}
