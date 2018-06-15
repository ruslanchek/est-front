import { Store } from 'react-stores';

export namespace ObjectsStore {
	export interface IObject {
		id: number;
		title: string;
		type: EObjectType;
		constructionDate: Date;
		price: number;
		address: string;
		lat: number;
		lng: number;
		params: IObjectParams;
		agent: IObjectAgent;
		isFavorite: boolean;
		pictures: IObjectPicture[];
		coverPicture: IObjectPicture;
	}

	export interface IObjectAgent {
		id: number;
		type: EObjectAgentType;
		fullName: string;
		contact: string;
	}

	export interface IObjectParams {
		bedrooms: number;
		bathrooms: number;
	}

	export interface IObjectPicture {
		id: number;
		title: string;
		description: string;
		src: string;
	}

	export enum EObjectType {
		House,
		Flat
	}

	export enum EObjectAgentType {
		Private,
		Realtor,
		Agency
	}

	export interface IState {
		objects: IObject[];
	}

	export const initialState: IState = {
		objects: []
	};

	export let store: Store<IState> = new Store<IState>(initialState);
}
