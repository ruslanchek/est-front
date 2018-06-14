import { RouteManager } from './managers/RouteManager';
import { StorageManager } from './managers/StorageManager';
import { StateStore } from './stores/StateStore';
import { ApiManager } from './managers/ApiManager';
import { ToastManager } from './managers/ToastManager';

export class Managers {
	public route: RouteManager;
	public storage: StorageManager;
	public api: ApiManager;
	public toast: ToastManager;

	public constructor() {
		this.route = new RouteManager();
		this.storage = new StorageManager();
		this.api = new ApiManager();
		this.toast = new ToastManager();

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
	}

	private async initManagers(): Promise<any> {
		await this.route.init();
		await this.storage.init();
		await this.api.init();
		await this.toast.init();
	}
}

export const managers = new Managers();
