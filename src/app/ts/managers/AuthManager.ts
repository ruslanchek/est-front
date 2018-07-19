import { Manager } from './Manager';
import * as superagent from 'superagent';
import { managers } from '../managers';
import { EApiRequestType } from './ApiManager';
import { CONFIG } from '../config';

export class AuthManager extends Manager {
	public reset(): void {

	}

	public async auth(): Promise<any> {
		await managers.api.request(EApiRequestType.GET, '/profile');
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			resolve();
		});
	}
}