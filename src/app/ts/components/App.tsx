import * as React from 'react';
import { Routes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { followStore } from 'react-stores';
import { StateStore } from '../stores/StateStore';
import { injectGlobal } from 'styled-components';
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
				<React.Fragment>
					<Toast/>
					<BrowserRouter basename={'/en'}>
						<Routes/>
					</BrowserRouter>
				</React.Fragment>
			);
		} else {
			return null;
		}
	}
}
