import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { CONFIG, PATHS } from '../config';
import { ERouteAuthRule } from '../managers/RouteManager';
import { HomePage } from './pages/HomePage';
import { Page, PageLayout } from './pages/Page';
import { ObjectPage } from './pages/ObjectPage';
import { AgentPage } from './pages/AgentPage';
import { AuthSignUpPage } from './pages/AuthSignUpPage';
import { AuthLoginPage } from './pages/AuthLoginPage';
import { PersonalPage } from './pages/PersonalPage';

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
								authRule={ERouteAuthRule.Shared}
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
								authRule={ERouteAuthRule.Shared}
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
								authRule={ERouteAuthRule.Shared}
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
								authRule={ERouteAuthRule.Shared}
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
								authRule={ERouteAuthRule.UnauthorizedOnly}
							>
								<AuthLoginPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={PATHS.PERSONAL}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Default}
								authRule={ERouteAuthRule.AuthorizedOnly}
							>
								<PersonalPage/>
							</Page>
						);
					}}
				/>

				<Route
					exact={true}
					path={PATHS.PERSONAL_PLACE_ADVERT}
					render={props => {
						return (
							<Page
								{...props}
								layout={PageLayout.Default}
								authRule={ERouteAuthRule.AuthorizedOnly}
							>
								<PersonalPage/>
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
