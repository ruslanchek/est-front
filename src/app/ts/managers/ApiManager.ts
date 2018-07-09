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
	private token = null;

	public retreiveToken(): void {
		this.setToken(managers.storage.cookies.get('token'));
	}

	public setToken(token: string): void {
		managers.storage.cookies.set('token', token);
		this.token = token;
	}

	public getToken(): string {
		return this.token;
	}

	public reset(): void {
		this.token = null;
	}

	public clearToken(): void {
		managers.storage.cookies.remove('token');
		this.token = null;
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTUzMTE1Mzc0MSwiZXhwIjoxNTMxMTU3MzQxfQ.wOpX2DlgbqAimiSMbJwqTb8-QSk9VCpqdZCISBsC6kg');

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

	public authError(): void {
		console.log('xxx');
	}

	public request<Input, Result>(type: EApiRequestType, path: string, data: Input): Promise<Result> {
		const url: string = `${ENDPOINT}${path}`;

		return new Promise<Result>((resolve, reject) => {
			switch (type) {
				case EApiRequestType.GET: {
					return superagent
						.get(url)
						.set('Authorization', `Bearer ${this.token}`)
						.query(data)
						.end((err, res) => {
							if(err) {
								if(err.status === 401) {
									this.authError();
								}

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
						.set('Authorization', `Bearer ${this.token}`)
						.end((err, res) => {			
							if(err) {
								if(err.status === 401) {
									this.authError();
								}

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