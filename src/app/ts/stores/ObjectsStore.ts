import { Store } from 'react-stores';

export namespace ObjectsStore {
	export interface IObject {

	}

	export interface IState {
		objects: IObject[];
	}

	export const initialState: IState = {
		objects: []
	};

	export let store: Store<IState> = new Store<IState>(initialState);
}
