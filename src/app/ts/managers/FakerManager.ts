import { Manager } from './Manager';
import { ObjectsStore } from '../stores/ObjectsStore';
import * as faker from 'faker';
import IObject = ObjectsStore.IObject;
import EObjectType = ObjectsStore.EObjectType;
import IObjectPicture = ObjectsStore.IObjectPicture;
import IObjectAgent = ObjectsStore.IObjectAgent;
import EObjectAgentType = ObjectsStore.EObjectAgentType;
import IObjectParam = ObjectsStore.IObjectParam;
import { EIcon } from '../components/common/Icon';
import ICity = ObjectsStore.ICity;
import ICountry = ObjectsStore.ICountry;
import IGeoPoint = ObjectsStore.IGeoPoint;
import IAddress = ObjectsStore.IAddress;
import EObjectContractType = ObjectsStore.EObjectContractType;
import IPreset = ObjectsStore.IPreset;
import Color = require('color');

const GENERATE_OBJECTS_COUNT: number = 11;
const GENERATE_PRESETS_COUNT: number = 5;

export class FakerManager extends Manager {
	public reset(): void {
	}

	public generateAgent(objectId: number): IObjectAgent {
		const agentType: EObjectAgentType = faker.random.arrayElement([
			EObjectAgentType.Private,
			EObjectAgentType.Realtor,
			EObjectAgentType.Agency,
		]);

		const name: string = agentType === EObjectAgentType.Agency ? faker.company.companyName() : `${faker.name.firstName()} ${faker.name.lastName()}`;

		return {
			id: faker.random.number({
				min: 1,
				max: 100000,
			}),
			avatar: `https://picsum.photos/600/400?i=${objectId}&t=agent`,
			type: agentType,
			name,
		};
	}

	public generateAddress(): IAddress {
		const country = this.generateCountry();

		return {
			streetAddress: faker.address.streetAddress(),
			country,
			city: this.generateCity(country.id),
			geoPoint: this.generateGeoPoint()
		};
	}

	public generateGeoPoint(): IGeoPoint {
		return {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	public generateCountry(): ICountry {
		return {
			id: faker.random.number(100000),
			title: faker.address.country(),
			nativeTitle: faker.address.country(),
			isoCode: faker.address.countryCode(),
			geoPoint: this.generateGeoPoint(),
		};
	}

	public generateCity(countryId: number): ICity {
		return {
			id: faker.random.number(100000),
			isoCode: faker.address.cityPrefix(),
			countryId,
			title: faker.address.city(),
			nativeTitle: faker.address.city(),
			geoPoint: this.generateGeoPoint(),
		};
	}

	public generatePreset(): IPreset {
		const color: Color = Color(faker.internet.color());

		return {
			id: faker.random.number({min: 1, max: 1000}),
			title: faker.random.words(2),
			price: faker.random.number({min: 1000, max: 5000}),
			color1: color.lighten(.3),
			color2: color.lighten(.8)
		};
	}

	public generateObject(objectId: number): IObject {
		const params: IObjectParam[] = [];

		params.push(
			{
				id: 1,
				icon: EIcon.Bed,
				name: 'bedrooms',
				value: faker.random.number({ min: 1, max: 5 }).toString(),
			},

			{
				id: 2,
				icon: EIcon.Bath,
				name: 'bathrooms',
				value: faker.random.number({ min: 1, max: 4 }).toString(),
			},
		);

		const pictures: IObjectPicture[] = [];
		const photosCount: number = faker.random.number({ min: 1, max: 7 });

		for (let i: number = 0; i < photosCount; i++) {
			pictures.push({
				id: i,
				title: faker.lorem.sentence(2),
				description: faker.lorem.sentence(10),
				src: `https://picsum.photos/600/400?i=${objectId}&a=${i}`,
			});
		}

		const coverPicture: IObjectPicture = pictures[0];

		return {
			id: objectId,
			title: faker.name.title(),
			type: faker.random.arrayElement([
				EObjectType.Flat,
				EObjectType.DetachedHouse,
				EObjectType.TownHouse,
				EObjectType.Studio,
			]),
			contractType: faker.random.arrayElement([
				EObjectContractType.Rent,
				EObjectContractType.Purchase
			]),
			constructionDate: faker.date.past(20),
			price: faker.random.number({ min: 50000, max: 1500000, precision: 2 }),
			address: this.generateAddress(),
			params,
			agent: this.generateAgent(objectId),
			isFavorite: faker.random.boolean(),
			pictures,
			coverPicture,
		};
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.setLoadingEntity('Loading objects...');

			const objects: IObject[] = [];
			const presets: IPreset[] = [];

			for (let i: number = 1; i < GENERATE_OBJECTS_COUNT; i++) {
				objects.push(this.generateObject(i));
			}

			for (let i: number = 1; i < GENERATE_PRESETS_COUNT; i++) {
				presets.push(this.generatePreset());
			}

			ObjectsStore.store.setState({
				objects,
				presets
			});

			resolve();
		});
	}
}