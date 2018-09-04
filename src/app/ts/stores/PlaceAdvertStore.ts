import { Store, StorePersistantDriver, StorePersistentLocalSrorageDriver } from 'react-stores';

export namespace PlaceAdvertStore {
	export enum EPlaceAdvertPage {
		Welcome,
		Info,
		Address,
		Images,
		Additional,
	}

	export interface IState {
		page: EPlaceAdvertPage;
	}

	export const initialState: IState = {
		page: EPlaceAdvertPage.Welcome,
	};

	export let store: Store<IState> = new Store<IState>(initialState, {
		live: true,
	}, new StorePersistentLocalSrorageDriver('place-advert'));
}
