import * as React from 'react';
import * as Ionicon from 'react-ionicons';

import { css, StyleSheet } from 'aphrodite';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';
import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { EIcon, EIconType, Icon } from './Icon';
import { Filters } from './Filters';
import { IsDesktop } from './IsDesktop';
import { LocaleSelector } from './LocaleSelector';
import { CountrySelector } from './CountrySelector';
import { CurrencySelector } from './CurrencySelector';
import { IsPhone } from './IsPhone';
import { IsDesktopOrTablet } from './IsDesktopOrTablet';
import { AuthStore } from '../../stores/AuthStore';

interface IState {
	isFloating: boolean;
	phoneNavIsVisible: boolean;
	isLocaleOpen: boolean;
}

const FLOATING_THRESHOLD: number = 0;

@followStore(StateStore.store)
@followStore(AuthStore.store)
export class Header extends React.PureComponent<{}, IState> {
	public state: IState = {
		isFloating: false,
		phoneNavIsVisible: false,
		isLocaleOpen: false,
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
				<div className={css(styles.floatingTrigger)}>
					<div className={css(styles.floatingTriggerInner)}>
						<Ionicon
							icon="md-options"
							fontSize="18px"
							color={COLORS.WHITE.toString()}
						/>

						<div className={css(styles.floatingTriggerText)}>
							Filters
						</div>
					</div>
				</div>

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
							<nav className={css(styles.nav)}>
								<CountrySelector/>

								<LocaleSelector/>

								<CurrencySelector
									styles={[COMMON_STYLES.LINK, styles.navLink]}
								/>

								<a
									href="#"
									className={css(COMMON_STYLES.LINK, styles.navLink)}
								>
									<IsDesktopOrTablet>
										Help
									</IsDesktopOrTablet>
								</a>
							</nav>
						</div>

						<nav className={css(styles.user, styles.userPhoneOrTablet)}>
							{AuthStore.store.state.authorized ? (
								<NavLink
									to={PATHS.PERSONAL}
									className={css(COMMON_STYLES.LINK, styles.userLink, styles.userLinkPhone)}
									onClick={() => {

									}}
								>
									<IsPhone>
										<Ionicon
											icon="md-person"
											fontSize="14px"
											color={COLORS.BLACK.toString()}
										/>
									</IsPhone>

									<IsDesktopOrTablet>
										{AuthStore.store.state.profile.email}
									</IsDesktopOrTablet>
								</NavLink>
							) : (
								<NavLink
									to={PATHS.AUTH_LOG_IN}
									className={css(COMMON_STYLES.LINK, styles.userLink, styles.userLinkPhone)}
									onClick={() => {

									}}
								>
									<IsPhone>
										<Ionicon
											icon="md-person"
											fontSize="14px"
											color={COLORS.BLACK.toString()}
										/>
									</IsPhone>

									<IsDesktopOrTablet>
										Sign up
									</IsDesktopOrTablet>
								</NavLink>
							)}

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

								<IsDesktop>
									Favorites
								</IsDesktop>
							</NavLink>

							<NavLink
								to={PATHS.HOME}
								className={css(COMMON_STYLES.LINK, styles.userLink, styles.userLinkPhone, styles.placeAdvert)}
							>
								<IsPhone>
									<span className={css(styles.placeAdvertIcon)}>
										<Ionicon
											icon="md-add"
											fontSize="18px"
											color={COLORS.WHITE.toString()}
										/>
									</span>
								</IsPhone>

								<IsDesktopOrTablet>
									Place advert
								</IsDesktopOrTablet>
							</NavLink>
						</nav>
					</div>
				</div>

				<div {...CSSUtils.mergeStyles(
					css(styles.filters, styles.block),
					isFloating && css(styles.filtersFloating),
				)} style={{}}>
					<div className={css(COMMON_STYLES.LAYOUT_DESKTOP, COMMON_STYLES.LAYOUT_PHONE_OR_TABLET)}>
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
		top: -1,
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

	logoFloating: {},

	icon: {
		marginRight: THEME.SECTION_PADDING_H / 2,
	},

	userIconPhone: CSSUtils.mediaSize(ECSSMediaKind.PhoneOrTablet, {
		marginRight: 0,
	}),

	container: {
		paddingTop: THEME.HEADER_HEIGHT,
	},

	linkText: {

	},

	linkTextPhone: {

	},

	floatingTrigger: {
		position: 'fixed',
		display: 'none',
		zIndex: 950,
		bottom: THEME.SECTION_PADDING_V,
		right: 40,
		borderRadius: 20,
		height: 32,
	},

	floatingTriggerText: {
		marginLeft: 10,
	},

	floatingTriggerInner: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 28,
		padding: `0 10px`,
		backgroundColor: COLORS.BLUE.toString(),
		borderRadius: 20,
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
		color: COLORS.WHITE.toString(),
		fontSize: THEME.FONT_SIZE_SMALL,
		textTransform: 'uppercase',
		fontWeight: 600,
	},

	header: {
		backgroundColor: COLORS.WHITE.toString(),
		zIndex: 10,
		width: '100%',
		left: 0,
		top: 0,
		maxWidth: '100%',
		position: 'fixed',
		display: 'flex',
		flexDirection: 'column',
		transition: 'box-shadow .3s',
	},

	headerFloating: {
		boxShadow: THEME.BOX_SHADOW_ELEVATION_MINIMAL,
	},

	filters: {
		backgroundColor: COLORS.WHITE.toString(),
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		boxShadow: THEME.BOX_SHADOW_ELEVATION_MINIMAL,
		transition: 'box-shadow .3s',
	},

	filtersFloating: {},

	block: {
		minHeight: THEME.HEADER_HEIGHT,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	blockFloating: {},

	navContainer: {
		flexGrow: 1,
	},

	navContainerFloating: {},

	phoneNavButton: {
		transition: 'opacity .2s',
		height: 26,
		top: 1,
		position: 'relative',

		':hover': {
			opacity: .7,
		},
	},

	nav: {
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		textTransform: 'uppercase',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	navLink: {
		marginRight: THEME.SECTION_PADDING_H,
		display: 'flex',
		justifyContent: 'flex-start',
		position: 'relative',
		whiteSpace: 'nowrap'
	},

	mobileNavLink: {
		display: 'block',
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		transition: 'background-color .2s',

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.toString(),
		},
	},

	mobileNav: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
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
		padding: `5px 8px`,
		borderRadius: 4,
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

	placeAdvertIcon: {
		display: 'flex',
		alignItems: 'center',
	}
});
