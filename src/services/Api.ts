import axios, {
    AxiosRequestConfig,
    AxiosResponse,
	AxiosInstance,
    AxiosError,
} from "axios";

export class Api {
	#instance: AxiosInstance;

    public constructor (config: AxiosRequestConfig) {
        this.#instance = axios.create(config);
    }

    getUri (config?: AxiosRequestConfig): string {
        return this.#instance.getUri(config);
    }

    request<T, R = AxiosResponse<T>>(
        config: AxiosRequestConfig
    ): Promise<R> {
        return this.#instance.request(config);
    }

    get<T, R = AxiosResponse<T>>(
        url: string
	): Promise<R> {
        return this.#instance.get(url);
    }

    success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    error<T> (error: AxiosError<T>): void {
        throw error;
    }
}
