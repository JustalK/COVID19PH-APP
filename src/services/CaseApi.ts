import { Api } from "./Api";
import { Case } from "../interfaces/Case";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export class CaseApi extends Api {
    constructor (config: AxiosRequestConfig) {
        super(config);
    }

	async getAllCases() {
		try {
			const res: AxiosResponse<Case[]> = await this.get<Case, AxiosResponse<Case[]>>("/cases");
			return this.success(res);
		} catch (error) {
			throw error;
		}
	}
}
