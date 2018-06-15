import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { followStore } from 'react-stores';
import { managers } from '../../managers';
import { RouteAuthRule } from '../../managers/RouteManager';
import { StateStore } from '../../stores/StateStore';
import { COLORS, THEME } from '../../theme';
import { Header } from '../common/Header';

export enum PageLayout {
	FullScreen,
	Navigation
}

interface IProps extends RouteComponentProps<{}> {
	layout: PageLayout;
	authRule: RouteAuthRule;
}

interface IState {
	routeKey: string;
}

@followStore(StateStore.store)
export class Page extends React.Component<IProps, IState> {
	public state: IState = {
		routeKey: null
	};

	public componentDidMount() {
		managers.route.initPage(this.props.history, this.props.match.params, this.props.authRule);
	}

	public componentDidUpdate() {
		const { key } = this.props.location;
		const { authRule } = this.props;

		if (key !== this.state.routeKey) {
			this.setState({
				routeKey: key
			});

			managers.route.initPage(this.props.history, this.props.match.params, authRule);
		}
	}

	public render() {
		switch (this.props.layout) {
			case PageLayout.Navigation : {
				return (
					<div className={css(styles.app)} id="appContainer">
						<Header/>

						<div className={css(styles.layoutNavigation)}>
							{this.props.children}
						</div>
					</div>
				);
			}

			default : {
				return (
					<div className={css(styles.app)} id="appContainer">
						{this.props.children}
					</div>
				);
			}
		}
	}
}

const styles: any = StyleSheet.create({
	app: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: '100%',
		fontFamily: THEME.FONT,
		fontSize: THEME.FONT_SIZE_REGULAR,
		backgroundColor: COLORS.GRAY_LIGHT.toString(),
	},

	layoutFullScreen: {
		flexGrow: 1,
		overflow: 'auto',
		maxHeight: '100%',
		'-webkit-overflow-scrolling': 'touch'
	},

	layoutNavigation: {
		flexGrow: 1,
		maxHeight: `calc(100% - ${THEME.HEADER_HEIGHT + THEME.NAV_HEIGHT}px)`,
		minHeight: `calc(100% - ${THEME.HEADER_HEIGHT + THEME.NAV_HEIGHT}px)`
	}
});