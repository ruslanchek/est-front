import * as React from 'react';
import { EOLocale } from 'eo-locale';
import { Routes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { followStore } from 'react-stores';
import { StateStore } from '../stores/StateStore';
import { AppLoading } from './common/AppLoading';
import { Toast } from './ui/Toast';

const locales = [
	{
		language: 'en',
		messages: {}
	},
	{
		language: 'ru',
		messages: {}
	}
];

@followStore(StateStore.store)
export class App extends React.Component<{}, {}> {
	public render() {
		if(StateStore.store.state.appReady) {
			return (
				<EOLocale.Provider locales={locales} defaultLanguage="en">
					<Toast/>
					<BrowserRouter>
						<Routes/>
					</BrowserRouter>
				</EOLocale.Provider>
			);
		} else {
			return (
				<AppLoading/>
			);
		}
	}
}
