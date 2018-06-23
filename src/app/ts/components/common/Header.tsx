import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';
import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { EIcon, EIconType, Icon } from './Icon';
import { Modal } from '../ui/Modal';
import { Filters } from './Filters';
import { IsDesktop } from './IsDesktop';
import { IsPhoneOrTablet } from './IsPhoneOrTablet';

interface IState {
	isFloating: boolean;
	phoneNavIsVisible: boolean;
}

const FLOATING_THRESHOLD: number = 30;

@followStore(StateStore.store)
export class Header extends React.PureComponent<{}, IState> {
	public state: IState = {
		isFloating: false,
		phoneNavIsVisible: false,
	};

	public componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	public componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	public render() {
		const { isFloating } = this.state;

		return (
			<header className={css(styles.container)}>
				<div {...CSSUtils.mergeStyles(
					css(styles.header),
					isFloating && css(styles.headerFloating),
				)}>
					<div {...CSSUtils.mergeStyles(
						css(styles.block, COMMON_STYLES.LAYOUT_DESKTOP, COMMON_STYLES.LAYOUT_PHONE_OR_TABLET),
						isFloating && css(styles.blockFloating),
					)}>
						<Link
							to={PATHS.HOME}
							{...CSSUtils.mergeStyles(
								css(styles.logo, styles.logoPhone),
								isFloating && css(styles.logoFloating),
							)}
						/>

						<div
							{...CSSUtils.mergeStyles(
								css(styles.navContainer),
								isFloating && css(styles.navContainerFloating),
							)}
						>
							<IsDesktop>
								<nav className={css(styles.nav)}>
									<NavLink
										to={PATHS.HOME}
										className={css(COMMON_STYLES.LINK, styles.navLink)}
									>
										Purchase
									</NavLink>

									<NavLink
										to={PATHS.HOME}
										className={css(COMMON_STYLES.LINK, styles.navLink)}
									>
										Rent
									</NavLink>

									<NavLink
										to={PATHS.HOME}
										className={css(COMMON_STYLES.LINK, styles.navLink)}
									>
										Flats
									</NavLink>

									<NavLink
										to={PATHS.HOME}
										className={css(COMMON_STYLES.LINK, styles.navLink)}
									>
										Houses
									</NavLink>
								</nav>
							</IsDesktop>

							<IsPhoneOrTablet>
								<a href="#" className={css(styles.phoneNavButton)} onClick={this.openPhoneNav.bind(this)}>
									<Icon icon={EIcon.More} size={24} color={COLORS.BLACK_LIGHT}/>
								</a>

								<Modal isVisible={this.state.phoneNavIsVisible} onClose={() => {
									this.setState({
										phoneNavIsVisible: false,
									});
								}}>
									<div>
										<NavLink
											to={PATHS.HOME}
											className={css(COMMON_STYLES.LINK, styles.navLink)}
										>
											Purchase
										</NavLink>

										<NavLink
											to={PATHS.HOME}
											className={css(COMMON_STYLES.LINK, styles.navLink)}
										>
											Rent
										</NavLink>

										<NavLink
											to={PATHS.HOME}
											className={css(COMMON_STYLES.LINK, styles.navLink)}
										>
											Flats
										</NavLink>

										<NavLink
											to={PATHS.HOME}
											className={css(COMMON_STYLES.LINK, styles.navLink)}
										>
											Houses
										</NavLink>
									</div>
								</Modal>
							</IsPhoneOrTablet>
						</div>

						<nav className={css(styles.user, styles.userPhoneOrTablet)}>
							<NavLink
								to={PATHS.HOME}
								className={css(COMMON_STYLES.LINK, styles.userLink, styles.userLinkPhone)}
							>
								<Icon
									icon={EIcon.Favorite}
									type={EIconType.TwoTone}
									size={18}
									color={COLORS.RED}
									outerStyles={[styles.icon, styles.userIconPhone]}
								/>
								<span className={css(styles.favoritesTextPhone)}>
									Favorites
								</span>
							</NavLink>

							<NavLink
								to={PATHS.HOME}
								className={css(COMMON_STYLES.LINK, styles.userLink, styles.userLinkPhone)}
								onClick={() => {

								}}
							>
								Login
							</NavLink>

							<NavLink
								to={PATHS.HOME}
								className={css(COMMON_STYLES.LINK, styles.userLink, styles.userLinkPhone, styles.placeAdvert)}
							>
								<Icon
									icon={EIcon.Plus}
									type={EIconType.Default}
									size={18}
									color={COLORS.WHITE}
									outerStyles={styles.icon}
								/>
								Place advert
							</NavLink>
						</nav>
					</div>

					<div {...CSSUtils.mergeStyles(
						css(styles.block, styles.blockOverflowPhoneOrTablet, COMMON_STYLES.LAYOUT_DESKTOP, COMMON_STYLES.LAYOUT_PHONE_OR_TABLET),
						isFloating && css(styles.blockFloating),
					)}>
						<Filters/>
					</div>
				</div>
			</header>
		);
	}

	private onScroll = () => {
		const document = window.document.documentElement;
		const scrollTop: number = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);

		this.setState({
			isFloating: scrollTop > FLOATING_THRESHOLD,
		});
	};

	private openPhoneNav = (e) => {
		e.preventDefault();

		this.setState({
			phoneNavIsVisible: true,
		});
	};
}

const styles = StyleSheet.create({
	logo: {
		backgroundImage: CSSUtils.image(require('../../../img/logos/realthub-color.svg')),
		backgroundPosition: '0 50%',
		backgroundSize: 'auto 35px',
		backgroundRepeat: 'no-repeat',
		width: 132,
		minWidth: 132,
		height: THEME.HEADER_HEIGHT,
		display: 'block',
		flexGrow: 0,
		willChange: 'transform',
		transition: 'transform .3s',
		transformOrigin: '0 50%',
		marginRight: THEME.SECTION_PADDING_H,
	},

	logoPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		width: 34,
		minWidth: 34,
		marginRight: THEME.SECTION_PADDING_H,
	}),

	logoFloating: {

	},

	favoritesTextPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		display: 'none',
	}),

	icon: {
		marginRight: THEME.SECTION_PADDING_H / 2,
	},

	userIconPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		marginRight: 0,
	}),

	container: {
		height: THEME.HEADER_HEIGHT * 2,
	},

	header: {
		height: THEME.HEADER_HEIGHT * 2,
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: `0 1px 2px 0 ${COLORS.BLACK.alpha(0.07).toString()}`,
		zIndex: 10,
		width: '100%',
		left: 0,
		top: 0,
		maxWidth: '100%',
		position: 'fixed',
		display: 'flex',
		flexDirection: 'column',
		willChange: 'height',
		transition: 'height .3s',
	},

	headerFloating: {

	},

	block: {
		height: THEME.HEADER_HEIGHT,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		transition: 'height .3s',
		willChange: 'height',

		':last-of-type': {
			boxSizing: 'border-box',
			borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		},
	},

	blockFloating: {

	},

	blockOverflowPhoneOrTablet: CSSUtils.mediaSize(ECSSMediaKind.PhoneOrTablet, {
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch'
	}),

	navContainer: {
		flexGrow: 1,
	},

	navContainerFloating: {

	},

	phoneNavButton: {
		transition: 'opacity .2s',
		height: 30,

		':hover': {
			opacity: .7
		}
	},

	nav: {
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		textTransform: 'uppercase',
	},

	navLink: {
		marginRight: THEME.SECTION_PADDING_H,
	},

	user: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		textTransform: 'uppercase',
	},

	userPhoneOrTablet: CSSUtils.mediaSize(ECSSMediaKind.PhoneOrTablet, {
		flexGrow: 1,
	}),

	userLink: {
		marginLeft: THEME.SECTION_PADDING_H,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		whiteSpace: 'nowrap',
	},

	userLinkPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		marginLeft: THEME.SECTION_PADDING_H / 1.5,
	}),

	placeAdvert: {
		color: COLORS.WHITE.toString(),
		backgroundColor: COLORS.BLUE.toString(),
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
			backgroundColor: COLORS.BLUE.alpha(0.9).toString(),
		},

		':active': {
			color: COLORS.WHITE.toString(),
		},
	},
});
