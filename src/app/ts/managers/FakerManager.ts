import { Manager } from './Manager';
import { AdvertsStore } from '../stores/AdvertsStore';
import { managers } from '../managers';
import { EApiRequestType, IApiResult, IApiResultList } from './ApiManager';
import IAdvert = AdvertsStore.IAdvert;
import IPreset = AdvertsStore.IPreset;

export class FakerManager extends Manager {
	public reset(): void {
	}

	public init<T>(): Promise<T> {
		return new Promise<any>(async (resolve, reject) => {
			this.setLoadingEntity('Loading adverts...');

			const advertsResult = await managers.api.request<IApiResultList<IAdvert>>(EApiRequestType.GET, '/faker/adverts');
			const presetsResult = await managers.api.request<IApiResultList<IPreset>>(EApiRequestType.GET, '/faker/presets');

			const adverts = advertsResult.payload.list.map((advert) => {
				return {...advert, ...{constructionDate: new Date(advert.constructionDate)}};
			});

			const presets = presetsResult.payload.list;

			AdvertsStore.store.setState({
				adverts,
				presets,
			});

			resolve();
		});
	}
}
