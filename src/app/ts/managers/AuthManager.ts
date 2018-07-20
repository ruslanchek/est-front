import { Manager } from './Manager';
import { managers } from '../managers';
import { EApiRequestType } from './ApiManager';
import { AuthStore } from '../stores/AuthStore';
import { log } from 'util';

export class AuthManager extends Manager {
	public reset(): void {
		AuthStore.store.setState({
			authorized: false,
			profile: null,
		});
	}

	public async auth(): Promise<any> {
		return new Promise<any>(async (resolve, reject) => {
			managers.api.request(EApiRequestType.GET, '/profile').then((profile) => {
				AuthStore.store.setState({
					authorized: true,
					profile,
				});

				resolve();
			}).catch(() => {
				AuthStore.store.setState({
					authorized: false,
					profile: null,
				});

				resolve();
			});
		});
	}

	public async login(email: string, password: string): Promise<any> {
		return new Promise<any>(async (resolve, reject) => {
			managers.api.request(EApiRequestType.POST, '/auth/login', {
				email,
				password,
			}).then((result) => {
				console.log(result);
			}).catch(() => {
				console.log('err');
			});
		});
	}

	public init(): Promise<any> {
		return this.auth();
	}
}