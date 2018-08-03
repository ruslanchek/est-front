import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { followStore } from 'react-stores';
import { managers } from '../../managers';
import { ERouteAuthRule } from '../../managers/RouteManager';
import { StateStore } from '../../stores/StateStore';
import { COLORS, THEME } from '../../theme';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';

export enum PageLayout {
	Default
}

interface IProps extends RouteComponentProps<{}> {
	layout: PageLayout;
	authRule: ERouteAuthRule;
}

interface IState {
	routeKey: string;
}

@followStore(StateStore.store)
export class Page extends React.Component<IProps, IState> {
	public state: IState = {
		routeKey: null,
	};

	public componentDidMount() {
		managers.route.initPage(this.props.history, this.props.match.params, this.props.authRule);
	}

	public componentDidUpdate() {
		const { key } = this.props.location;
		const { authRule } = this.props;

		if (key !== this.state.routeKey) {
			this.setState({
				routeKey: key,
			});

			managers.route.initPage(this.props.history, this.props.match.params, authRule);
		}
	}

	public render() {
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

const styles: any = StyleSheet.create({
	page: {
		minWidth: '100%',
		fontFamily: THEME.FONT,
		fontSize: THEME.FONT_SIZE_REGULAR,
		backgroundColor: COLORS.GRAY_LIGHT.toString(),
		color: COLORS.BLACK.toString(),
	}
});