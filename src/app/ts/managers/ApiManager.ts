import { Manager } from './Manager';

export class ApiManager extends Manager {
	public reset(): void {
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			resolve();
		});
	}
}