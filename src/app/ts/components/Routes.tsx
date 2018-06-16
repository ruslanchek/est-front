import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { CONFIG, PATHS } from '../config';
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
					path={PATHS.HOME}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Default}
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
					render={() => <Redirect to={PATHS.HOME}></Redirect>}
				/>
			</Switch>
		);
	}
}
