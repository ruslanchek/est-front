import { Manager } from './Manager';
import { managers } from '../managers';
import { EApiRequestType } from './ApiManager';

export class AuthManager extends Manager {
	public reset(): void {

	}

	public async auth(): Promise<any> {
		const profile = await managers.api.request(EApiRequestType.GET, '/profile');
		
		console.log(profile);
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.auth();
			resolve();
		});
	}
}