import { Store } from 'react-stores';
import { EIcon } from '../components/common/Icon';
import Color = require('color');

export namespace ObjectsStore {
	export interface IPreset {
		id: number;
		title: string;
		price: number;
		color1: string;
		color2: string;
	}

	export interface IObject {
		id: number;
		title: string;
		type: EObjectType;
		contractType: EObjectContractType;
		constructionDate: Date;
		price: number;
		address: IAddress;
		params: IObjectParam[];
		agent: IObjectAgent;
		isFavorite: boolean;
		pictures: IObjectPicture[];
		coverPicture: IObjectPicture;
	}

	export interface IAddress {
		streetAddress: string;
		country: ICountry;
		city: ICity;
		geoPoint: IGeoPoint;
	}

	export interface IGeoPoint {
		lat: number;
		lng: number;
	}

	export interface ICountry {
		id: number;
		title: string;
		nativeTitle: string;
		isoCode: string;
		geoPoint: IGeoPoint;
	}

	export interface ICity {
		id: number;
		isoCode: string;
		title: string;
		nativeTitle: string;
		countryId: number;
		geoPoint: IGeoPoint;
	}

	export interface IObjectAgent {
		id: number;
		avatar: string;
		type: EObjectAgentType;
		name: string;
	}

	export interface IObjectParam {
		id: number;
		icon: EIcon;
		name: string;
		value: string;
	}

	export interface IObjectPicture {
		id: number;
		title: string;
		description: string;
		src: string;
	}

	export enum EObjectType {
		DetachedHouse,
		TownHouse,
		Flat,
		Studio,
	}

	export enum EObjectContractType {
		Purchase,
		Rent
	}

	export enum EObjectAgentType {
		Private,
		Realtor,
		Agency
	}

	export interface IState {
		objects: IObject[];
		presets: IPreset[];
	}

	export const initialState: IState = {
		objects: [],
		presets: []
	};

	export let store: Store<IState> = new Store<IState>(initialState);
}
