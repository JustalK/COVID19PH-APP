import { Api } from "./Api";
import { Case, FailureCase } from "../interfaces/Case";
import { Failure } from "../interfaces/Failure";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export class CaseApi extends Api {
    constructor (config: AxiosRequestConfig) {
        super(config);
    }

	async get_all_cases(): Promise<Case[] | Failure> {
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
}
