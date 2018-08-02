import { Manager } from './Manager';
import { managers } from '../managers';
import { EApiRequestType } from './ApiManager';
import { AuthStore } from '../stores/AuthStore';

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

	public async login(email: string, password: string): Promise<any> {
		const result = await managers.api.request<any>(EApiRequestType.POST, '/auth/login', {
			email,
			password,
		});

		if(!result.error && result.payload.accessToken) {
			this.setToken(result.payload.accessToken);
			await this.auth();
		}
	}

	public async signUp(email: string, password: string): Promise<any> {
		const result = await managers.api.request<any>(EApiRequestType.POST, '/auth/register', {
			email,
			password,
		});

		if(!result.error && result.payload.accessToken) {
			this.setToken(result.payload.accessToken);
			await this.auth();
		}
	}

	public init(): Promise<any> {
		return this.auth();
	}
}