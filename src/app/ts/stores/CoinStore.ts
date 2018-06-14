import { Store } from 'react-stores';

export namespace CoinStore {
	export interface ICoin {
		_id: string;
		title: string;
		symbol: string;
		rank: number;
		lastUpdated: number;
		enabled: boolean;
		priceUsd: number;
		priceBtc: number;
		volumeDayUsd: number;
		marketCapUsd: number;
		availableSupply: number;
		totalSupply: number;
		maxSupply: number;
		percentChangeHour: number;
		percentChangeDay: number;
		percentChangeWeek: number;
	}

	export interface IState {
		coins: ICoin[];
		favorites: string[];
	}

	export const initialState: IState = {
		coins: [],
		favorites: []
	};

	export let store: Store<IState> = new Store<IState>(initialState);
}
