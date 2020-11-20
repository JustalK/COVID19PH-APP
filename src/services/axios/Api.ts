import { Axios } from "./Axios";

import {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from "axios";

export class Api extends Axios {
    private token: string;

    public constructor (conf: AxiosRequestConfig) {
        super(conf);
		console.log(this);

        this.getUri = this.getUri.bind(this);
        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);

          this.interceptors.request.use((param) => {
            return {
                ...param
            }
        });

        this.interceptors.response.use(param => ({
            ...param
        }));
    }

    public getUri (config?: AxiosRequestConfig): string {
        return this.getUri(config);
    }

    public request<T, R = AxiosResponse<T>>(
        config: AxiosRequestConfig
    ): Promise<R> {
        return this.request(config);
    }

    public get<T, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.get (url, config);
    }

    public success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    public error<T> (error: AxiosError<T>): void {
        throw error;
    }
}
