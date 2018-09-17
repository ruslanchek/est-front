import { Manager } from './Manager';
import { managers } from '../managers';
import { CONFIG } from '../config';
import axios from 'axios';

export enum EApiRequestType {
	GET,
	POST,
	PATCH,
	PUT,
	DELETE,
}

export interface IApiResult<Payload> {
	payload: Payload;
	error: IApiResultError;
}

export interface IApiResultError {
	status: number;
	code: string;
	fields?: { [field: string]: string };
	details?: any;
}

export class ApiManager extends Manager {
	public reset(): void {

	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			resolve();
		});
	}

	public async request<ResultPayload>(type: EApiRequestType, path: string, data?: any): Promise<IApiResult<ResultPayload>> {
		const url: string = `${CONFIG.API_BASE_URL}${path}`;

		let token: string = managers.storage.cookies.get('token');
		let result = null;

		token = token ? `Bearer ${token}` : '';

		try {
			switch (type) {
				case EApiRequestType.GET: {
					result = await axios.get(`${url}${this.serialize(data)}`, {
						headers: {
							Authorization: token,
						},
					});

					break;
				}

				case EApiRequestType.POST : {
					result = await axios.post(url, data, {
						headers: {
							Authorization: token,
						},
					});

					break;
				}
			}
		} catch(e) {
			result = e.response;
		}

		if(result && result.data) {
			return result.data;
		} else {
			return {
				payload: null,
				error: {
					code: null,
					status: null,
				}
			};
		}
	}

	private serialize(obj): string {
		if (obj) {
			return Object.keys(obj).map((key, val) => {
				return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
			}).join('&');
		} else {
			return '';
		}
	}
}