import { Manager } from './Manager';
import { managers } from '../managers';
import { EApiRequestType } from './ApiManager';
import { AuthStore } from '../stores/AuthStore';
import { THEME } from '../theme';
import { PATHS } from '../config';

export interface IApiResult<Payload> {
	payload: Payload;
	error: IApiResultError;
}

export interface IApiResultError {
	status: number;
	code: string;
	fields?: {[field: string]: string};
	details?: any;
}

export class AuthManager extends Manager {
	public reset(): void {
		AuthStore.store.setState({
			authorized: false,
			profile: null,
		});
	}

	public logOut(): void {
		this.reset();
		this.setToken('');

		// TODO: Make checks for Authorized only pages. Redirect to HOME_PAGE from secured routes and refresh page on shared ones.
		managers.route.go(PATHS.AUTH_LOG_IN);
	}

	public setToken(token: string): void {
		managers.storage.cookies.set('token', token);
	}

	public async auth(): Promise<any> {
		const result = await managers.api.request<any>(EApiRequestType.GET, '/profile');

		if(result && !result.error && result.payload.entity) {
			AuthStore.store.setState({
				authorized: true,
				profile: result.payload.entity,
			});
		} else {
			AuthStore.store.setState({
				authorized: false,
				profile: null,
			});
		}
	}

	public async login(email: string, password: string): Promise<IApiResult<any>> {
		const result = await managers.api.request<any>(EApiRequestType.POST, '/auth/login', {
			email,
			password,
		});

		if(!result.error && result.payload.accessToken) {
			this.setToken(result.payload.accessToken);
			await this.auth();
		}

		return result;
	}

	public async signUp(email: string, password: string): Promise<IApiResult<any>> {
		const result = await managers.api.request<any>(EApiRequestType.POST, '/auth/register', {
			email,
			password,
		});

		if(!result.error && result.payload.accessToken) {
			this.setToken(result.payload.accessToken);
			await this.auth();
		}

		return result;
	}

	public init(): Promise<any> {
		return this.auth();
	}
}