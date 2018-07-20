import { Manager } from './Manager';
import { managers } from '../managers';
import { EApiRequestType } from './ApiManager';
import { AuthStore } from '../stores/AuthStore';
import { log } from 'util';
import IProfile = AuthStore.IProfile;

export class AuthManager extends Manager {
	public reset(): void {
		AuthStore.store.setState({
			authorized: false,
			profile: null,
		});
	}

	public async auth(): Promise<any> {
		return new Promise<any>(async (resolve, reject) => {
			managers.api
				.request<any>(EApiRequestType.GET, '/profile')
				.then((result) => {
					if(!result.error && result.payload.entity) {
						AuthStore.store.setState({
							authorized: true,
							profile: result.payload.entity,
						});

						resolve();
					} else {
						reject();
					}
				})
				.catch(() => {
					AuthStore.store.setState({
						authorized: false,
						profile: null,
					});

					reject();
				});
		});
	}

	public async login(email: string, password: string): Promise<any> {
		return new Promise<any>(async (resolve, reject) => {
			managers.api
				.request<any>(EApiRequestType.POST, '/auth/login', {
					email,
					password,
				})
				.then(async (result) => {
					if(!result.error && result.payload.accessToken) {
						managers.api.setToken(result.payload.accessToken);
						await this.auth();
						resolve();
					}
				})
				.catch(() => {
					console.log('err');
					reject();
				});
		});
	}

	public init(): Promise<any> {
		return this.auth();
	}
}