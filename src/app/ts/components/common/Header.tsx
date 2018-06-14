import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';
import { Nav } from './Nav';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config';

const ICON_SIZE: number = 20;
const BUTTON_SIZE: number = 32;

@followStore(StateStore.store)
export class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<header className={css(styles.header)}>
				<div className={css(styles.container)}>
					<Link to={CONFIG.PATHS.HOME} className={css(styles.logo)}/>

					<h1 className={css(styles.title)}>
						{StateStore.store.state.title}
					</h1>

					<a
						href="https://eo.trade?refid=googlechrome"
						className={css(styles.button, styles.buy)}
						target="_blank"
					>
						Buy EO
						<i className={css(styles.initial)}>Initial Coin Sale</i>
					</a>

					{/*<nav className={css(styles.buttons)}>*/}
					{/*<a className={css(styles.button)} onClick={(e) => {*/}
					{/*e.preventDefault();*/}
					{/*managers.route.go(CONFIG.PATHS.SETTINGS);*/}
					{/*}}>*/}
					{/*<Icon name={IconName.Menu} size={ICON_SIZE}/>*/}
					{/*</a>*/}
					{/*</nav>*/}
				</div>

				<div className={css(styles.nav)}>
					<Nav/>
				</div>
			</header>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		backgroundImage: `url(${require('../../../img/logo.svg')})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'contain',
		marginRight: 10,
		width: 40,
		height: 40,
		display: 'block',
		marginLeft: -3,
		cursor: 'pointer'
	},

	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: 60,
		padding: `0 ${THEME.SECTION_PADDING}px`,
	},

	nav: {
		height: 60,
	},

	header: {
		height: THEME.HEADER_HEIGHT,
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: `0 1px 2px 0 ${COLORS.BLACK.alpha(0.07).toString()}`,
		zIndex: 10
	},

	title: {
		fontSize: THEME.FONT_SIZE_H1,
		fontWeight: 400,
		flexGrow: 1
	},

	back: {
		marginRight: THEME.SECTION_PADDING,
		flexGrow: 0
	},

	buy: {
		marginLeft: THEME.SECTION_PADDING,
		flexGrow: 0,
		border: 'none',
		overflow: 'hidden',
		position: 'relative',
		fontWeight: 200,
		fontSize: 14,
		height: 32,
		minWidth: 100,
		backgroundImage: `radial-gradient(farthest-side at 50% -220%, #31F762 -70%, #00758C 120%)`,
		boxShadow: `0 2px 5px 0 ${COLORS.GREEN_DARK.alpha(0.4).toString()}`,
		color: COLORS.WHITE.toString(),
		textAlign: 'center',

		':after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			backgroundColor: '#fff',
			opacity: 0,
			transition: 'opacity .2s'
		},

		':hover:after': {
			opacity: 0.25,
		},

		':link': {
			color: COLORS.WHITE.toString(),
			textDecoration: 'none'
		},

		':visited': {
			color: COLORS.WHITE.toString(),
		},
	},

	initial: {
		fontSize: 8,
		display: 'block',
		fontStyle: 'normal',
		marginTop: 3
	},

	button: {
		backgroundColor: COLORS.VIOLET_DARK.alpha(0.05).toString(),
		padding: '6px 10px',
		borderRadius: 4,
		fontWeight: 600,
		border: `1px solid ${COLORS.VIOLET_DARK.alpha(0.075).toString()}`,
		cursor: 'pointer',
		transition: '.2s',

		':hover': {
			backgroundColor: COLORS.VIOLET_DARK.alpha(0.1).toString(),
		},
	}
});
