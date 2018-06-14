import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { CONFIG } from '../config';
import { RouteAuthRule } from '../managers/RouteManager';
import { HomePage } from './pages/HomePage';
import { Page, PageLayout } from './pages/Page';

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
					exact
					path="*"
					render={() => <Redirect to={CONFIG.PATHS.HOME}/>}
				/>
			</Switch>
		);
	}
}
