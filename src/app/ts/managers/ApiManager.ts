import { Manager } from './Manager';
import * as superagent from 'superagent';
import { managers } from '../managers';

const ENDPOINT: string = 'http://localhost:5666';
const TIMEOUT: number = 1000;

const enum EApiRequestType {
	GET,
	POST,
	PATCH,
	PUT,
	DELETE,
}

export class ApiManager extends Manager {
	public retreiveToken(): void {
		this.setToken(managers.storage.cookies.get('token'));
	}

	public setToken(token: string): void {
		managers.storage.cookies.set('token', token);
	}

	public reset(): void {

	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.request(EApiRequestType.POST, '/api/advert', {
				title: 'xxx',
				type: 'Flat',
				contractType: 'Rent',
				price: 1000,
				agent: 17
			})
			.then(() => {
								
			})
			.catch(() => {
				
			});

			resolve();
		});
	}
	
	public request<InputPayload, ResultPayload>(type: EApiRequestType, path: string, data: InputPayload): Promise<ResultPayload> {
		const url: string = `${ENDPOINT}${path}`;
		const token: string = managers.storage.cookies.get('token');

		return new Promise<ResultPayload>((resolve, reject) => {
			switch (type) {
				case EApiRequestType.GET: {
					return superagent
						.get(url)
						.set('Authorization', `Bearer ${token}`)
						.query(data)
						.end((err, res) => {
							if(err) {
								reject(err.body);
							} else {
								resolve(res.body);
							}
						});
				}

				case EApiRequestType.POST : {
					return superagent
						.post(url)
						.send(data)
						.set('accept', 'json')
						.set('Authorization', `Bearer ${token}`)
						.end((err, res) => {			
							if(err) {
								reject(err.body);
							} else {
								resolve(res.body);
							}
						});
				}

				// case EApiRequestType.PUT : {
				// 	return await this.instance.put(path);
				// }

				// case EApiRequestType.PATCH : {
				// 	return await this.instance.patch(path);
				// }

				// case EApiRequestType.DELETE : {
				// 	return await this.instance.delete(path);
				// }
			}
		});
	}
}