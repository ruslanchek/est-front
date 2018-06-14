import { History } from 'history';

import { CONFIG } from '../config';
import { StateStore } from '../stores/StateStore';
import { Manager } from './Manager';
import { CoinStore } from '../stores/CoinStore';

export enum RouteAuthRule {
	UnauthorizedOnly,
	AuthorizedOnly,
	Shared
}

interface IMeta {
	title: string
}

export class RouteManager extends Manager {
	public history: History | null = null;
	public params: any = {};

	public reset(): void {

	}

	public init(): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve();
		});
	}

	public goToFavs(): void {
		const favorites: string[] = CoinStore.store.state.favorites;

		if (favorites.length > 0 && this.history.location.pathname === CONFIG.PATHS.HOME) {
			this.go(CONFIG.PATHS.FAVORITES);
		}
	}

	public initPage(history: History, params: any, authRule: RouteAuthRule): void {
		this.history = history;
		this.params = params;

		this.setMeta();
		this.scroll(0);

		switch (authRule) {
			case RouteAuthRule.AuthorizedOnly : {
				break;
			}

			case RouteAuthRule.UnauthorizedOnly : {
				break;
			}

			case RouteAuthRule.Shared :
			default : {

			}
		}
	}

	public scroll(x: number): void {
		window.scrollTo(x, 0);
	}

	public go(path: string): void {
		if (this.history) {
			this.history.push(path);
			this.scroll(0);
		} else {
			window.history.pushState({}, '', path);
		}
	}

	public backAvailable(backAvailable: boolean): void {
		StateStore.store.setState({
			...StateStore.store.state,
			backAvailable
		});
	}

	public setTitle(title: string): void {
		StateStore.store.setState({
			...StateStore.store.state,
			title,
		});
	}

	private setMeta(): void {
		const meta: IMeta = this.getMeta(this.history.location.pathname);

		if(meta) {
			this.setTitle(meta.title);
		}
	}

	private getMeta(path: string): IMeta {
		switch (path) {
			case CONFIG.PATHS.SETTINGS : {
				return {
					title: 'Settings'
				};
			}

			case CONFIG.PATHS.FAVORITES : {
				return {
					title: 'Favorites'
				};
			}

			case CONFIG.PATHS.SEARCH : {
				return {
					title: 'Search'
				};
			}

			case CONFIG.PATHS.COIN : {
				return {
					title: 'Settings'
				};
			}

			case CONFIG.PATHS.HOME : {
				return {
					title: `EO.Finance`
				};
			}

			default: {
				return null;
			}
		}
	}
}
