import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { CONFIG, PATHS } from '../config';
import { RouteAuthRule } from '../managers/RouteManager';
import { HomePage } from './pages/HomePage';
import { Page, PageLayout } from './pages/Page';
import { ObjectPage } from './pages/ObjectPage';
import { AgentPage } from './pages/AgentPage';
import { AuthSignUpPage } from './pages/AuthSignUpPage';
import { AuthLoginPage } from './pages/AuthLoginPage';

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
					exact={true}
					path={PATHS.OBJECT}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Default}
								authRule={RouteAuthRule.Shared}
							>
								<ObjectPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={PATHS.AGENT}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Default}
								authRule={RouteAuthRule.Shared}
							>
								<AgentPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={PATHS.AUTH_SIGN_UP}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Default}
								authRule={RouteAuthRule.Shared}
							>
								<AuthSignUpPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={PATHS.AUTH_LOG_IN}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Default}
								authRule={RouteAuthRule.UnauthorizedOnly}
							>
								<AuthLoginPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact
					path="*"
					render={() => <Redirect to={PATHS.HOME}/>}
				/>
			</Switch>
		);
	}
}
