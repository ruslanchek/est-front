import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { followStore } from 'react-stores';
import { managers } from '../../managers';
import { ERouteAuthRule } from '../../managers/RouteManager';
import { StateStore } from '../../stores/StateStore';
import { COLORS, THEME } from '../../theme';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { AuthStore } from '../../stores/AuthStore';
import { PATHS } from '../../config';
import styled from 'react-emotion';

export enum PageLayout {
	Default,
}

interface IProps extends RouteComponentProps<{}> {
	layout: PageLayout;
	authRule: ERouteAuthRule;
}

interface IState {
	routeKey: string;
	location: string;
}

@followStore(StateStore.store)
export class Page extends React.Component<IProps, IState> {
	public state: IState = {
		routeKey: null,
		location: null,
	};

	public componentWillMount() {
		managers.route.initPage(this.props.history, this.props.match.params, this.props.authRule);
	}

	public componentDidUpdate() {
		const { key } = this.props.location;
		const { authRule } = this.props;
		const { pathname, hash, search } = this.props.history.location;
		const location = `${pathname}${search}${hash}`;

		if (key !== this.state.routeKey || location !== this.state.location) {
			this.setState({
				routeKey: key,
				location,
			});

			managers.route.initPage(this.props.history, this.props.match.params, authRule);
		}
	}

	public render() {
		const redirectUrl: string = this.getRedirectUrl();

		if(redirectUrl) {
			return (
				<Redirect to={redirectUrl}/>
			);
		} else {
			switch (this.props.layout) {
				default : {
					return (
						<Container id="appContainer">
							<Header/>
								{this.props.children}
							<Footer/>
						</Container>
					);
				}
			}
		}
	}

	private getRedirectUrl(): string {
		let url: string = null;

		switch (this.props.authRule) {
			case ERouteAuthRule.AuthorizedOnly : {
				if(!AuthStore.store.state.profile || !AuthStore.store.state.authorized) {
					url = PATHS.AUTH_LOG_IN;
				}
				break;
			}

			case ERouteAuthRule.UnauthorizedOnly : {
				if(AuthStore.store.state.profile && AuthStore.store.state.authorized) {
					url = PATHS.HOME;
				}
				break;
			}

			case ERouteAuthRule.Shared :
			default : {

			}
		}

		return url;
	}
}

const Container = styled('div')`
  min-width: 100%;
	font-family: ${THEME.FONT};
	font-size: ${THEME.FONT_SIZE_REGULAR}px;
	background-color: ${COLORS.GRAY_LIGHT.toString()};
	color: ${COLORS.BLACK.toString()};
`;
