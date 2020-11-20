import { Api } from "./axios/Api";
import { Case } from "../interfaces/case";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export class CaseApi extends Api {
    constructor (config: AxiosRequestConfig) {
        super(config);

		this.getAllCases = this.getAllCases.bind(this);
    }

	public async getAllCases (): Promise<Case[]> {
		try {
			const res: AxiosResponse<Case[]> = await this.get<Case, AxiosResponse<Case[]>>("http://13.250.29.32:5000/cases");
			return this.success(res);
		} catch (error) {
			throw error;
		}
	}
}
