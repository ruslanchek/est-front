import { Store } from 'react-stores';
import { EIcon } from '../components/common/Icon';
import Color = require('color');

export namespace AdvertsStore {
	export interface IPreset {
		id: number;
		title: string;
		price: number;
		color1: string;
		color2: string;
	}

	export interface IAdvert {
		id: number;
		title: string;
		type: EAdvertType;
		contractType: EAdvertContractType;
		constructionDate: Date;
		price: number;
		address: IAddress;
		params: IAdvertParam[];
		agent: IAdvertAgent;
		isFavorite: boolean;
		pictures: IAdvertPicture[];
		coverPicture: IAdvertPicture;
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

	export interface IAdvertAgent {
		id: number;
		avatar: string;
		type: EAdvertAgentType;
		name: string;
	}

	export interface IAdvertParam {
		id: number;
		icon: EIcon;
		name: string;
		value: string;
	}

	export interface IAdvertPicture {
		id: number;
		title: string;
		description: string;
		src: string;
	}

	export enum EAdvertType {
		DetachedHouse,
		TownHouse,
		Flat,
		Studio,
	}

	export enum EAdvertContractType {
		Purchase,
		Rent,
	}

	export enum EAdvertAgentType {
		Private,
		Realtor,
		Agency,
	}

	export interface IState {
		adverts: IAdvert[];
		presets: IPreset[];
	}

	export const initialState: IState = {
		adverts: [],
		presets: [],
	};

	export let store: Store<IState> = new Store<IState>(initialState);
}
