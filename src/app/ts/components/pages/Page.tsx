import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { followStore } from 'react-stores';
import { managers } from '../../managers';
import { RouteAuthRule } from '../../managers/RouteManager';
import { StateStore } from '../../stores/StateStore';
import { COLORS, THEME } from '../../theme';
import { Header } from '../common/Header';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { Layout } from '../common/Layout';

export enum PageLayout {
	Default
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
			default : {
				return (
					<div className={css(styles.page)} id="appContainer">
						<Header/>

						<Layout outerStyles={[styles.layout, styles.layoutPhone]}>
							{this.props.children}
						</Layout>
					</div>
				);
			}
		}
	}
}

const styles: any = StyleSheet.create({
	layout: {
		paddingTop: THEME.PAGE_SIDE_PADDING_DESKTOP
	},

	layoutPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		paddingTop: THEME.PAGE_SIDE_PADDING_PHONE
	}),

	page: {
		minWidth: '100%',
		fontFamily: THEME.FONT,
		fontSize: THEME.FONT_SIZE_REGULAR,
		backgroundColor: COLORS.GRAY_LIGHT.toString(),
		color: COLORS.BLACK.toString()
	}
});