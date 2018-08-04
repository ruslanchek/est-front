import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';
import { Link, NavLink } from 'react-router-dom';
import { CONFIG, PATHS } from '../../config';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { Layout } from './Layout';
import { EIcon, EIconType, Icon } from './Icon';
import { Modal } from '../modals/Modal';
import { Filters } from './Filters';

interface IState {

}

export class Footer extends React.PureComponent<{}, IState> {
	public state: IState = {};

	public render() {
		return (
			<footer className={css(styles.footer)}>
				<div className={css(styles.block, COMMON_STYLES.LAYOUT_DESKTOP, COMMON_STYLES.LAYOUT_PHONE_OR_TABLET)}>
					<div className={css(styles.top, styles.topPhone)}>
						<div className={css(styles.left)}>
							<Link
								to={PATHS.HOME}
								className={css(styles.logo)}
							/>
						</div>

						<div className={css(styles.right)}>
							<nav className={css(styles.nav)}>
								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.navLink, styles.navLinkPhone)}
								>
									Purchase
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.navLink, styles.navLinkPhone)}
								>
									Rent
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.navLink, styles.navLinkPhone)}
								>
									Flats
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.navLink, styles.navLinkPhone)}
								>
									Houses
								</NavLink>

								<NavLink
									to={PATHS.AUTH_LOG_IN}
									className={css(COMMON_STYLES.LINK, styles.navLink, styles.navLinkPhone)}
								>
									Login
								</NavLink>

								<NavLink
									to={PATHS.AUTH_SIGN_UP}
									className={css(COMMON_STYLES.LINK, styles.navLink, styles.navLinkPhone)}
								>
									Sign up
								</NavLink>
							</nav>
						</div>
					</div>

					<div className={css(styles.bottom, styles.bottomPhone)}>
						<div className={css(styles.left)}>
							<nav className={css(styles.copy, styles.copyPhone)}>
								<span className={css(styles.copyItem, styles.copyItemPhone)}>
									&copy; 2018 Realthub Ltd.
								</span>

								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.copyItem, styles.copyItemPhone)}
								>
									Contacts
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.copyItem, styles.copyItemPhone)}
								>
									Terms
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.copyItem, styles.copyItemPhone)}
								>
									Privacy
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={css(COMMON_STYLES.LINK, styles.copyItem, styles.copyItemPhone)}
								>
									Advertise
								</NavLink>

								<a href="tel:+44 171 012 3456" className={css(COMMON_STYLES.LINK, styles.copyItem, styles.copyItemPhone)}>
									+44 171 012 3456
								</a>

								<a href="mailto:info@realthub.com" className={css(COMMON_STYLES.LINK, styles.copyItem, styles.copyItemPhone)}>
									info@realthub.com
								</a>
							</nav>
						</div>

						<div className={css(styles.right)}>
							<div className={css(styles.social, styles.socialPhone)}>
								<a href="#" title="Facebook" className={css(styles.socialIcon, styles.socialIconPhone, styles.socialIconFacebook)}/>
								<a href="#" title="Instagram" className={css(styles.socialIcon, styles.socialIconPhone, styles.socialIconInstagram)}/>
								<a href="#" title="Twitter" className={css(styles.socialIcon, styles.socialIconPhone, styles.socialIconTwitter)}/>
								<a href="#" title="YouTube" className={css(styles.socialIcon, styles.socialIconPhone, styles.socialIconYoutube)}/>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

const styles = StyleSheet.create({
	footer: {
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_MINIMAL_INVERTED
	},

	block: {

	},

	top: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: THEME.SECTION_PADDING_V,
		paddingBottom: THEME.SECTION_PADDING_V / 2,
	},

	topPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		display: 'block',
		paddingBottom: 0
	}),

	bottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: THEME.SECTION_PADDING_V / 2,
		paddingBottom: THEME.SECTION_PADDING_V * 1.5,
	},

	bottomPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		display: 'block'
	}),

	copy: {
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.BLACK_LIGHT.toString(),
		display: 'flex',
		lineHeight: '1.7em',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'wrap'
	},

	copyPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		display: 'block'
	}),

	copyItem: {
		marginRight: THEME.SECTION_PADDING_H,
		whiteSpace: 'nowrap'
	},

	copyItemPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		display: 'block',
		marginTop: THEME.SECTION_PADDING_V
	}),

	left: {},

	right: {},

	nav: {
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		textTransform: 'uppercase',
	},

	navLink: {
		marginLeft: THEME.SECTION_PADDING_H,
	},

	navLinkPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		marginTop: THEME.SECTION_PADDING_V,
		marginLeft: 0,
		display: 'block'
	}),

	logo: {
		backgroundImage: CSSUtils.image(require('../../../img/logos/realthub-bw.svg')),
		backgroundPosition: '0 50%',
		backgroundSize: 'auto 35px',
		backgroundRepeat: 'no-repeat',
		opacity: .7,
		width: 132,
		minWidth: 132,
		height: THEME.HEADER_HEIGHT,
		display: 'block',
		flexGrow: 0,
		willChange: 'transform',
		transition: 'transform .3s',
		transformOrigin: '0 50%',
		marginRight: THEME.SECTION_PADDING_H * 1.5,
	},

	social: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},

	socialPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone,{
		justifyContent: 'flex-start',
		marginTop: THEME.SECTION_PADDING_V * 2
	}),

	socialIcon: {
		width: 28,
		height: 28,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: '100%',
		marginLeft: THEME.SECTION_PADDING_H,
		opacity: .85,
		transition: 'opacity .2s',

		':hover': {
			opacity: 1
		}
	},

	socialIconPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone,{
		marginLeft: 0,
		marginRight: THEME.SECTION_PADDING_H
	}),

	socialIconFacebook: {
		backgroundImage: CSSUtils.image(require('../../../img/social/icon-social-facebook.svg'))
	},

	socialIconInstagram: {
		backgroundImage: CSSUtils.image(require('../../../img/social/icon-social-instagram.svg'))
	},

	socialIconTwitter: {
		backgroundImage: CSSUtils.image(require('../../../img/social/icon-social-twitter.svg'))
	},

	socialIconYoutube: {
		backgroundImage: CSSUtils.image(require('../../../img/social/icon-social-youtube.svg'))
	}
});
