import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';

interface IState {
	isFloating: boolean;
}

@followStore(StateStore.store)
export class Header extends React.PureComponent<{}, IState> {
	public state: IState = {
		isFloating: false
	};

	public componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	public componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	public render() {
		const headerRules: StyleDeclaration[] = [
			styles.header
		];

		if(this.state.isFloating) {
			headerRules.push(
				styles.headerFloating
			);
		}

		return (
			<header className={css(styles.container)}>
				<div className={css(headerRules)}>
xxx
				</div>
			</header>
		);
	}

	private onScroll = () => {
		const document = window.document.documentElement;
		const scrollTop: number = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);

		this.setState({
			isFloating: scrollTop > 0
		});
	};
}

const styles = StyleSheet.create({
	container: {
		height: THEME.HEADER_HEIGHT
	},

	header: {
		height: THEME.HEADER_HEIGHT,
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: `0 1px 2px 0 ${COLORS.BLACK.alpha(0.07).toString()}`,
		zIndex: 10,
		width: '100%',
		left: 0,
		top: 0
	},

	headerFloating: {
		position: 'fixed'
	}
});
