import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';
import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { Layout } from './Layout';
import { EIcon, EIconType, Icon } from './Icon';
import { Modal } from '../ui/Modal';

interface IState {
	isFloating: boolean;
	modalIsVisible: boolean;
}

@followStore(StateStore.store)
export class Header extends React.PureComponent<{}, IState> {
	public state: IState = {
		isFloating: false,
		modalIsVisible: false
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
					<Layout outerStyles={styles.layout}>
						<Link to={PATHS.HOME} className={css(styles.logo, styles.logoPhone)}/>

						<nav className={css(styles.nav)}>
							<NavLink to={PATHS.HOME} className={css(COMMON_STYLES.LINK, styles.navLink)}>
								Purchase
							</NavLink>

							<NavLink to={PATHS.HOME} className={css(COMMON_STYLES.LINK, styles.navLink)}>
								Rent
							</NavLink>

							<NavLink to={PATHS.HOME} className={css(COMMON_STYLES.LINK, styles.navLink)}>
								Flats
							</NavLink>

							<NavLink to={PATHS.HOME} className={css(COMMON_STYLES.LINK, styles.navLink)}>
								Houses
							</NavLink>
						</nav>

						<nav className={css(styles.user)}>
							<NavLink to={PATHS.HOME} className={css(COMMON_STYLES.LINK, styles.userLink)}>
								<Icon icon={EIcon.Favorite} type={EIconType.TwoTone} size={18} color={COLORS.RED} outerStyles={styles.icon}/>
								Favorites
							</NavLink>

							<NavLink to={PATHS.HOME} className={css(COMMON_STYLES.LINK, styles.userLink)} onClick={() => {
								this.setState({
									modalIsVisible: true
								});
							}}>
								Login
							</NavLink>

							<NavLink to={PATHS.HOME} className={css(COMMON_STYLES.LINK, styles.userLink, styles.placeAdvert)}>
								<Icon icon={EIcon.Plus} type={EIconType.Default} size={18} color={COLORS.WHITE} outerStyles={styles.icon}/>
								Place advert
							</NavLink>
						</nav>
					</Layout>
				</div>

				<Modal isVisible={this.state.modalIsVisible} onClose={() => {
					this.setState({
						modalIsVisible: false
					});
				}}>
					<div>
						<p>xxx</p>
						<p>xxx</p>
						<p>xxx</p>
						<p>xxx</p>
						<p>xxx</p>
						<p>xxx</p>
						<p>xxx</p>
						<p>xxx</p>
						<p>xxx</p>
					</div>
				</Modal>
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
	logo: {
		backgroundImage: CSSUtils.image(require('../../../img/logos/realthub-color.svg')),
		backgroundPosition: '0 50%',
		backgroundSize: 'auto 35px',
		backgroundRepeat: 'no-repeat',
		width: 130,
		minWidth: 130,
		height: THEME.HEADER_HEIGHT,
		display: 'block',
		flexGrow: 0,
		marginRight: THEME.SECTION_PADDING_H * 1.5
	},

	logoPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		width: 34,
		minWidth: 34,
		marginRight: THEME.SECTION_PADDING_H
	}),

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
		top: 0,
		maxWidth: '100%'
	},

	layout: {
		height: THEME.HEADER_HEIGHT,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	nav: {
		flexGrow: 1,
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		textTransform: 'uppercase',
	},

	navLink: {
		marginRight: THEME.SECTION_PADDING_H
	},

	user: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		textTransform: 'uppercase',
	},

	icon: {
		marginRight: THEME.SECTION_PADDING_H / 2
	},

	userLink: {
		marginLeft: THEME.SECTION_PADDING_H,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		whiteSpace: 'nowrap'
	},

	placeAdvert: {
		color: COLORS.WHITE.toString(),
		backgroundColor: '#017AD5',
		padding: `4px ${THEME.SECTION_PADDING_H / 2}px 4px 4px`,
		borderRadius: 16,
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		textTransform: 'uppercase',
		transition: 'background-color .2s',

		':link': {
			color: COLORS.WHITE.toString(),
		},

		':visited': {
			color: COLORS.WHITE.toString(),
		},

		':hover': {
			color: COLORS.WHITE.toString(),
			backgroundColor: COLORS.GREEN.alpha(0.9).toString()
		},

		':active': {
			color: COLORS.WHITE.toString(),
		}
	},

	headerFloating: {
		position: 'fixed'
	}
});
