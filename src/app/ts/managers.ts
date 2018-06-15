import { RouteManager } from './managers/RouteManager';
import { StorageManager } from './managers/StorageManager';
import { StateStore } from './stores/StateStore';
import { ApiManager } from './managers/ApiManager';
import { ToastManager } from './managers/ToastManager';
import { FakerManager } from './managers/FakerManager';

export class Managers {
	public route: RouteManager;
	public storage: StorageManager;
	public api: ApiManager;
	public toast: ToastManager;
	public faker: FakerManager;

	public constructor() {
		this.route = new RouteManager();
		this.storage = new StorageManager();
		this.api = new ApiManager();
		this.toast = new ToastManager();
		this.faker = new FakerManager();

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
	}

	private async initManagers(): Promise<any> {
		await this.route.init();
		await this.storage.init();
		await this.api.init();
		await this.toast.init();
		await this.faker.init();
	}
}

export const managers = new Managers();
