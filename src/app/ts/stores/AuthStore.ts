import { Store } from 'react-stores';

export namespace AuthStore {
	export interface IState {
		authorized: boolean;
		profile: any;
	}

	export const initialState: IState = {
		authorized: false,
		profile: null,
	};

	export let store: Store<IState> = new Store<IState>(initialState);
}
