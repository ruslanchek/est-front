import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { CONFIG } from '../config';
import { RouteAuthRule } from '../managers/RouteManager';
import { HomePage } from './pages/HomePage';
import { Page, PageLayout } from './pages/Page';
import { Favorite } from './ui/Favorite';
import { FavoritesPage } from './pages/FavoritesPage';
import { SearchPage } from './pages/SearchPage';
import { CoinPage } from './pages/CoinPage';

interface IState {
	key: number;
}

export class Routes extends React.Component<{}, IState> {
	public render() {
		return (
			<Switch>
				<Route
					exact={true}
					path={CONFIG.PATHS.HOME}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Navigation}
								authRule={RouteAuthRule.Shared}
							>
								<HomePage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={CONFIG.PATHS.FAVORITES}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Navigation}
								authRule={RouteAuthRule.Shared}
							>
								<FavoritesPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={CONFIG.PATHS.SEARCH}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Navigation}
								authRule={RouteAuthRule.Shared}
							>
								<SearchPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={CONFIG.PATHS.COIN}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Navigation}
								authRule={RouteAuthRule.Shared}
							>
								<CoinPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact
					path="*"
					render={() => <Redirect to={CONFIG.PATHS.HOME}/>}
				/>
			</Switch>
		);
	}
}
