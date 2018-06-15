import { Manager } from './Manager';
import { ObjectsStore } from '../stores/ObjectsStore';
import * as faker from 'faker';
import IObject = ObjectsStore.IObject;
import EObjectType = ObjectsStore.EObjectType;
import IObjectParams = ObjectsStore.IObjectParams;
import IObjectPicture = ObjectsStore.IObjectPicture;
import IObjectAgent = ObjectsStore.IObjectAgent;
import EObjectAgentType = ObjectsStore.EObjectAgentType;

export class FakerManager extends Manager {
	public reset(): void {
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const objects: IObject[] = [];

			for(let i: number = 1; i < 11; i++) {
				const params: IObjectParams = {
					bedrooms: faker.random.number({min: 1, max: 5, precision: 0}),
					bathrooms: faker.random.number({min: 1, max: 4, precision: 0})
				};

				const agent: IObjectAgent = {
					id: faker.random.number({min: 1, max: 100000, precision: 0}),
					type: faker.random.arrayElement([
						EObjectAgentType.Private,
						EObjectAgentType.Realtor,
						EObjectAgentType.Agency
					]),
					fullName: `${faker.name.findName()} ${faker.name.lastName()}`,
					contact: faker.phone.phoneNumber()
				};

				const pictures: IObjectPicture[] = [];

				for(let i2: number = 1; i2 < 7; i2++) {
					pictures.push({
						id: i2,
						title: faker.lorem.sentence(2),
						description: faker.lorem.sentence(10),
						src: faker.image.imageUrl(600, 400)
					});
				}

				const coverPicture: IObjectPicture = pictures[0];

				objects.push({
					id: i,
					title: faker.name.title(),
					type: faker.random.arrayElement([
						EObjectType.Flat,
						EObjectType.House
					]),
					constructionDate: faker.date.past(20),
					price: faker.random.number({min: 50000, max: 1500000, precision: 2}),
					address: faker.address.streetAddress(true),
					lat: parseFloat(faker.address.latitude()),
					lng: parseFloat(faker.address.longitude()),
					params,
					agent,
					isFavorite: faker.random.boolean(),
					pictures,
					coverPicture
				});
			}
			
			console.log(objects);

			ObjectsStore.store.setState({
				objects
			});

			resolve();
		});
	}
}