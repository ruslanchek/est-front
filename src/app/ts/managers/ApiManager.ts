import { Manager } from './Manager';
import { CoinStore } from '../stores/CoinStore';
import ICoin = CoinStore.ICoin;
import { managers } from '../managers';
import { EToastType } from './ToastManager';

interface ICoinsResult {
	success: boolean;
	data: ICoin[];
}

export class ApiManager extends Manager {
	public reset(): void {
	}

	public init(): Promise<any> {
		const favorites: string[] = managers.storage.local.getJSON('favorites') || [];

		CoinStore.store.setState({
			favorites
		} as CoinStore.IState);

		setInterval(() => {
			this.updateCoins();
		}, 180000);

		return this.updateCoins();
	}

	public updateCoins(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			return this.loadCoins(0).then((result: ICoinsResult) => {
				CoinStore.store.setState({
					coins: result.data,
				} as CoinStore.IState);

				resolve();
			}).catch(() => {
				reject();
			});
		});
	}

	public favorite(id: string, title: string): void {
		let favorites: string[] = CoinStore.store.state.favorites.concat();
		let isFavorite: boolean = false;

		if(favorites.indexOf(id) >= 0) {
			const newFavorites: string[] = [];

			favorites.forEach((item) => {
				if(item !== id) {
					newFavorites.push(item);
				}
			});

			favorites = newFavorites.concat();

		} else {
			isFavorite = true;
			favorites.push(id);
		}

		CoinStore.store.setState({
			favorites
		} as CoinStore.IState);

		managers.storage.local.setJSON('favorites', favorites);

		const text: string = isFavorite ?
			`${title} added to favorites`
			:
			`${title} removed from favorites`;

		managers.toast.toast(EToastType.Info, text, 2200);
	}

	public loadCoins(limit: number): Promise<ICoinsResult> {
		return new Promise((resolve, reject) => {
			fetch('http://api.investingbar.com/v1/coins?limit=' + limit)
				.then((response) => {
					if (response.status !== 200) {
						return reject({
							success: false,
							data: []
						});
					}

					response.json().then((data) => {
						if(data && data.data) {
							return resolve({
								success: true,
								data: data.data
							});
						}

						reject({
							success: false,
							data: []
						});
					});
				}).catch(() => {
					reject({
						success: false,
						data: []
					});
				});
		});
	}
}