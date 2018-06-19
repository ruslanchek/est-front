import { RouteManager } from './managers/RouteManager';
import { StorageManager } from './managers/StorageManager';
import { StateStore } from './stores/StateStore';
import { ApiManager } from './managers/ApiManager';
import { ToastManager } from './managers/ToastManager';
import { FakerManager } from './managers/FakerManager';
import FilterManager = PIXI.FilterManager;
import { FiltersManager } from './managers/FiltersManager';

export class Managers {
	public route: RouteManager;
	public storage: StorageManager;
	public api: ApiManager;
	public toast: ToastManager;
	public faker: FakerManager;
	public filters: FiltersManager;

	public constructor() {
		this.route = new RouteManager();
		this.storage = new StorageManager();
		this.api = new ApiManager();
		this.toast = new ToastManager();
		this.faker = new FakerManager();
		this.filters = new FiltersManager();

		this.init();
	}

	public init(): void {
		this.initManagers()
			.then(() => {
				StateStore.store.setState({
					...StateStore.store.state,
					appReady: true,
				});
			})
			.catch(() => {
				StateStore.store.setState({
					...StateStore.store.state,
					appReady: true,
				});
			});
	}

	private resetManagers(): void {
		this.route.reset();
		this.storage.reset();
		this.api.reset();
		this.toast.reset();
		this.faker.reset();
		this.filters.reset();
	}

	private async initManagers(): Promise<any> {
		await this.route.init();
		await this.storage.init();
		await this.api.init();
		await this.toast.init();
		await this.faker.init();
		await this.filters.init();
	}
}

export const managers = new Managers();
