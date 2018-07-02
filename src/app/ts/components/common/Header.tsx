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
import { ModalHeader } from '../ui/ModalHeader';
import * as Ionicon from 'react-ionicons';
import { FilterCountry } from '../ui/FilterCountry';

interface IState {
	isFloating: boolean;
	phoneNavIsVisible: boolean;
}

const FLOATING_THRESHOLD: number = 0;

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
							<IsDesktop>
								<nav className={css(styles.nav)}>
									<FilterCountry isoCode={'gb'} title="GB"/>
								</nav>
							</IsDesktop>

							<IsPhoneOrTablet>
								<a href="#" className={css(styles.phoneNavButton)} onClick={this.openPhoneNav.bind(this)}>
									<Ionicon
										icon="md-more"
										fontSize="26px"
										color={COLORS.BLACK_LIGHT.toString()}
									/>
								</a>

								<Modal
									isVisible={this.state.phoneNavIsVisible}
										onClose={() => {
										this.setState({
											phoneNavIsVisible: false,
										});
									}}
								>
									<ModalHeader title="Navigation"/>

									<div className={css(styles.mobileNav)}>
										<NavLink
											to={PATHS.HOME}
											className={css(COMMON_STYLES.LINK, styles.mobileNavLink)}
										>
											Purchase
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
								<div className={css(styles.placeAdvertIcon)}>
									<Ionicon
										icon="md-flag"
										fontSize="16px"
										color={COLORS.WHITE.toString()}
									/>
								</div>

								Place advert
							</NavLink>
						</nav>
					</div>
				</div>

				<div {...CSSUtils.mergeStyles(
					css(styles.filters, styles.block, COMMON_STYLES.LAYOUT_DESKTOP, COMMON_STYLES.LAYOUT_PHONE_OR_TABLET),
					isFloating && css(styles.filtersFloating)
				)} style={{

				}}>
					<Filters/>
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
		paddingTop: THEME.HEADER_HEIGHT
	},

	floatingTrigger: {
		position: 'fixed',
		display: 'none',
		zIndex: 950,
		bottom: THEME.SECTION_PADDING_V,
		right: 40,
		borderRadius: 20,
		height: 32
	},

	floatingTriggerText: {
		marginLeft: 10
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
		fontWeight: 600
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
		transition: 'box-shadow .3s'
	},

	headerFloating: {
		boxShadow: THEME.BOX_SHADOW_ELEVATION_MINIMAL,
	},

	filters: {
		backgroundColor: COLORS.WHITE.toString(),
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		boxShadow: THEME.BOX_SHADOW_ELEVATION_MINIMAL,
		transition: 'box-shadow .3s'
	},

	filtersFloating: {

	},

	block: {
		minHeight: THEME.HEADER_HEIGHT,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	blockFloating: {

	},

	navContainer: {
		flexGrow: 1,
	},

	navContainerFloating: {

	},

	phoneNavButton: {
		transition: 'opacity .2s',
		height: 26,
		top: 1,
		position: 'relative',

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

	mobileNavLink: {
		display: 'block',
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		transition: 'background-color .2s',

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.toString()
		}
	},

	mobileNav: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start'
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
		borderRadius: 10,
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
		marginRight: 5,
		display: 'flex',
		alignItems: 'center'
	}
});
