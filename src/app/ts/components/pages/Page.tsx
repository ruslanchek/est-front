import { css, StyleSheet } from 'aphrodite/no-important';
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

export enum PageLayout {
	Default
}

interface IProps extends RouteComponentProps<{}> {
	layout: PageLayout;
	authRule: ERouteAuthRule;
}

interface IState {
	routeKey: string;
	redirect: string;
}

@followStore(StateStore.store)
export class Page extends React.Component<IProps, IState> {
	public state: IState = {
		routeKey: null,
		redirect: null,
	};

	public componentWillMount() {
		managers.route.initPage(this.props.history, this.props.match.params, this.props.authRule);
		this.checkAuth(this.props.authRule);
	}

	public componentDidUpdate() {
		const { key } = this.props.location;
		const { authRule } = this.props;

		if (key !== this.state.routeKey) {
			this.setState({
				routeKey: key,
			});

			managers.route.initPage(this.props.history, this.props.match.params, authRule);
			this.checkAuth(authRule);
		}
	}

	public render() {
		if(this.state.redirect) {
			return (
				<Redirect to={this.state.redirect}/>
			);
		} else {
			switch (this.props.layout) {
				default : {
					return (
						<div className={css(styles.page)} id="appContainer">
							<Header/>

							{this.props.children}

							<Footer/>
						</div>
					);
				}
			}
		}
	}

	private checkAuth(authRule: ERouteAuthRule): void {
		let url: string = null;

		switch (authRule) {
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

		this.setState({
			redirect: url,
		});
	}
}

const styles: any = StyleSheet.create({
	page: {
		minWidth: '100%',
		fontFamily: THEME.FONT,
		fontSize: THEME.FONT_SIZE_REGULAR,
		backgroundColor: COLORS.GRAY_LIGHT.toString(),
		color: COLORS.BLACK.toString(),
	}
});