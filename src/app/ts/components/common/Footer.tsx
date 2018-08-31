import * as React from 'react';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { mq } from '../../lib/CSSUtils';
import { Layout } from './Layout';
import styled, { css, cx } from 'react-emotion';

export class Footer extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<Container>
				<Layout>
					<Top>
						<Side>
							<Link
								to={PATHS.HOME}
								className={logo}
							/>
						</Side>

						<Side>
							<Social>
								<a href="#" title="Facebook" className={cx(socialIcon, socialIconFacebook)}/>
								<a href="#" title="Instagram" className={css(socialIcon, socialIconInstagram)}/>
								<a href="#" title="Twitter" className={css(socialIcon, socialIconTwitter)}/>
								<a href="#" title="YouTube" className={css(socialIcon, socialIconYoutube)}/>
							</Social>
						</Side>
					</Top>

					<Bottom>
						<Side>
							<Copy>
								<span className={copyItem}>
									&copy; 2018 Realthub Ltd.
								</span>

								<NavLink
									to={PATHS.HOME}
									className={copyItem}
								>
									Contacts
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={copyItem}
								>
									Terms
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={copyItem}
								>
									Privacy
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={copyItem}
								>
									Advertise
								</NavLink>

								<a href="tel:+44 171 012 3456" className={copyItem}>
									+44 171 012 3456
								</a>

								<a href="mailto:info@realthub.com" className={copyItem}>
									info@realthub.com
								</a>
							</Copy>
						</Side>

						<Side>
							<Nav>
								<NavLink
									to={PATHS.HOME}
									className={navLink}
								>
									Purchase
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={navLink}
								>
									Rent
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={navLink}
								>
									Flats
								</NavLink>

								<NavLink
									to={PATHS.HOME}
									className={navLink}
								>
									Houses
								</NavLink>

								<NavLink
									to={PATHS.AUTH_LOG_IN}
									className={navLink}
								>
									Login
								</NavLink>

								<NavLink
									to={PATHS.AUTH_SIGN_UP}
									className={navLink}
								>
									Sign up
								</NavLink>
							</Nav>
						</Side>
					</Bottom>
				</Layout>
			</Container>
		);
	}
}

const Container = styled('footer')`
	background-color: ${COLORS.WHITE.toString()};
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL_INVERTED};
	display: flex;
	flex-direction: column;
`;

const Top = styled('div')`
  display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: ${THEME.SECTION_PADDING_V}px;
	padding-bottom: ${THEME.SECTION_PADDING_V / 2}px;
	
	${mq.phone} {
		display: block;
		padding-bottom: 0;
	}
`;

const Bottom = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: ${THEME.SECTION_PADDING_V / 2}px;
	padding-bottom: ${THEME.SECTION_PADDING_V * 1.5}px;
		
  ${mq.phone} {
		display: block;
	}
`;

const Copy = styled('nav')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	color: ${COLORS.BLACK_LIGHT.toString()};
	display: flex;
	line-height: 1.7em;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	
	${mq.phone} {
		display: block;
		margin-top: ${THEME.SECTION_PADDING_V}px;
	}
`;

const Side = styled('div')`
  order: 1;
`;

const Nav = styled('nav')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	font-weight: 600;
	text-transform: uppercase;
	
	${mq.phone} {
		margin-top: ${THEME.SECTION_PADDING_V * 2}px;
	}
`;

const copyItem = css`
	${COMMON_STYLES.LINK};
  margin-right: ${THEME.SECTION_PADDING_H}px;
	white-space: nowrap;
	
	${mq.phone} {
		display: block;
		margin-top: ${THEME.SECTION_PADDING_V}px;
	}
`;

const navLink = css`
	${COMMON_STYLES.LINK};
  margin-left: ${THEME.SECTION_PADDING_H}px;
  
  ${mq.phone} {
		margin-top: ${THEME.SECTION_PADDING_V}px;
		margin-left: 0;
		display: block;
	}
`;

const logo = css`
  background-image: url(${require('../../../img/logos/realthub-bw.svg')});
	background-position: 0 50%;
	background-size: auto 35px;
	background-repeat: no-repeat;
	opacity: .7;
	width: 132px;
	min-width: 132px;
	height: ${THEME.HEADER_HEIGHT}px;
	display: block;
	flex-grow: 0;
	will-change: transform;
	transition: transform .3s;
	transform-origin: 0 50%;
	margin-right: ${THEME.SECTION_PADDING_H * 1.5}px;
`;

const Social = styled('div')`
  display: flex;
	justify-content: flex-end;
	align-items: center;
	
	${mq.phone} {
		justify-content: flex-start;
		margin-top: ${THEME.SECTION_PADDING_V * 2}px;
	}
`;

const socialIcon = css`
  width: 28px;
	height: 28px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100%;
	margin-left: ${THEME.SECTION_PADDING_H}px;
	opacity: .85;
	transition: opacity .2s;

	&:hover {
		opacity: 1
	}
	
	${mq.phone} {
		margin-left: 0;
		margin-right: ${THEME.SECTION_PADDING_H}px;
	}
`;

const socialIconFacebook = css`
  background-image: url(${require('../../../img/social/icon-social-facebook.svg')});
`;

const socialIconInstagram = css`
  background-image: url(${require('../../../img/social/icon-social-instagram.svg')});
`;

const socialIconTwitter = css`
  background-image: url(${require('../../../img/social/icon-social-twitter.svg')});
`;

const socialIconYoutube = css`
  background-image: url(${require('../../../img/social/icon-social-youtube.svg')});
`;
