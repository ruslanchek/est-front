import { Manager } from './Manager';
import { managers } from '../managers';
import { EApiRequestType } from './ApiManager';

export interface INewAdvert {
	title: string;
	type: EAdvertType;
	contractType: EAdvertContractType;
	constructionDate: number;
	price: number;
}

export enum EAdvertType {
	DetachedHouse = 'DetachedHouse',
	TownHouse = 'TownHouse',
	Flat = 'Flat',
	Studio = 'Studio',
}

export enum EAdvertContractType {
	Purchase = 'Purchase',
	Rent = 'Rent',
}

export class AdvertManager extends Manager {
	public reset(): void {

	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			resolve();
		});
	}

	public async createNew(data: INewAdvert): Promise<any> {
		return managers.api.request<INewAdvert>(EApiRequestType.POST, '/advert', data);
	}
}