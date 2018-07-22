import { History } from 'history';

import { CONFIG, PATHS } from '../config';
import { StateStore } from '../stores/StateStore';
import { Manager } from './Manager';
import { AuthStore } from '../stores/AuthStore';

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
				if(AuthStore.store.state.profile && AuthStore.store.state.authorized) {
					this.go(PATHS.PERSONAL);
				}
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
			case PATHS.HOME : {
				return {
					title: `EST`
				};
			}

			default: {
				return null;
			}
		}
	}
}
