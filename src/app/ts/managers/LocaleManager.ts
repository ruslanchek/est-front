import { Manager } from './Manager';
import LocalizedStrings from 'react-localization';

export class LocaleManager extends Manager {
	private strings: any = null;

	public reset(): void {
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.strings = new LocalizedStrings({
				en: {
					test: 'Help!!!'
				},
				ru: {
					test: 'Хелп'
				}
			});

			resolve();
		});
	}
}