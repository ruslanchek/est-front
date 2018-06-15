import { Manager } from './Manager';
import { ObjectsStore } from '../stores/ObjectsStore';
import * as faker from 'faker';
import IObject = ObjectsStore.IObject;
import EObjectType = ObjectsStore.EObjectType;
import IObjectParams = ObjectsStore.IObjectParams;
import IObjectPicture = ObjectsStore.IObjectPicture;
import IObjectAgent = ObjectsStore.IObjectAgent;
import EObjectAgentType = ObjectsStore.EObjectAgentType;

const GENERATE_COUNT: number = 41;

export class FakerManager extends Manager {
	public reset(): void {
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const objects: IObject[] = [];

			for(let i: number = 1; i < GENERATE_COUNT; i++) {
				const params: IObjectParams = {
					bedrooms: faker.random.number({min: 1, max: 5}),
					bathrooms: faker.random.number({min: 1, max: 4})
				};

				const agent: IObjectAgent = {
					id: faker.random.number({min: 1, max: 100000}),
					type: faker.random.arrayElement([
						EObjectAgentType.Private,
						EObjectAgentType.Realtor,
						EObjectAgentType.Agency
					]),
					fullName: `${faker.name.findName()} ${faker.name.lastName()}`,
					contact: faker.phone.phoneNumber()
				};

				const pictures: IObjectPicture[] = [];
				const photosCount: number = faker.random.number({min: 1, max: 7});

				for(let i2: number = 0; i2 < photosCount; i2++) {
					pictures.push({
						id: i2,
						title: faker.lorem.sentence(2),
						description: faker.lorem.sentence(10),
						src: `https://picsum.photos/600/400?i=${i}&a=${i2}`
					});
				}

				const coverPicture: IObjectPicture = pictures[0];

				objects.push({
					id: i,
					title: faker.name.title(),
					type: faker.random.arrayElement([
						EObjectType.Flat,
						EObjectType.DetachedHouse
					]),
					constructionDate: faker.date.past(20),
					price: faker.random.number({min: 50000, max: 1500000, precision: 2}),
					streetAddress: faker.address.streetAddress(true),
					city: faker.address.city(),
					lat: parseFloat(faker.address.latitude()),
					lng: parseFloat(faker.address.longitude()),
					params,
					agent,
					isFavorite: faker.random.boolean(),
					pictures,
					coverPicture
				});
			}

			ObjectsStore.store.setState({
				objects
			});

			resolve();
		});
	}
}