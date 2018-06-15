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

const GENERATE_COUNT: number = 41;

export class FakerManager extends Manager {
	public reset(): void {
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const objects: IObject[] = [];

			for(let i: number = 1; i < GENERATE_COUNT; i++) {
				const params: IObjectParam[] = [];

				params.push(
					{
						id: 1,
						icon: EIcon.Bed,
						name: 'bedrooms',
						value: faker.random.number({min: 1, max: 5}).toString(),
					},

					{
						id: 2,
						icon: EIcon.Favorite,
						name: 'bathrooms',
						value: faker.random.number({min: 1, max: 4}).toString(),
					}
				);

				const agentType: EObjectAgentType = faker.random.arrayElement([
					EObjectAgentType.Private,
					EObjectAgentType.Realtor,
					EObjectAgentType.Agency
				]);

				const agentName: string = agentType === EObjectAgentType.Agency ? faker.company.companyName() : `${faker.name.firstName()} ${faker.name.lastName()}`;

				const agent: IObjectAgent = {
					id: faker.random.number({min: 1, max: 100000}),
					avatar: `https://picsum.photos/600/400?i=${i}&t=ava`,
					type: agentType,
					fullName: agentName,
					contact: faker.phone.phoneNumberFormat()
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
						EObjectType.DetachedHouse,
						EObjectType.TownHouse,
						EObjectType.Studio
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