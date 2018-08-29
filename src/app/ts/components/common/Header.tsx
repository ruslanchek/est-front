import * as React from 'react';
import * as Ionicon from 'react-ionicons';
import styled, { css, cx } from 'react-emotion';

import { COLORS, COMMON_STYLES_EMOTION, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';
import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { mq } from '../../lib/CSSUtils';
import { EIcon, EIconType, Icon } from './Icon';
import { Filters } from './Filters';
import { IsDesktop } from './IsDesktop';
import { LocaleSelector } from './LocaleSelector';
import { CountrySelector } from './CountrySelector';
import { CurrencySelector } from './CurrencySelector';
import { IsPhone } from './IsPhone';
import { IsTabletOrDesktop } from './IsTabletOrDesktop';
import { AuthStore } from '../../stores/AuthStore';
import { Layout } from './Layout';

interface IState {
	isFloating: boolean;
	phoneNavIsVisible: boolean;
	isLocaleOpen: boolean;
}

const FLOATING_THRESHOLD: number = 0;

@followStore(StateStore.store)
@followStore(AuthStore.store)
export class Header extends React.Component<{}, IState> {
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
			<Container>
				<HeaderContainer isFloating={isFloating}>
					<Layout className={block}>
						<Link to={PATHS.HOME} className={logo} />

						<NavContainer>
							<Nav>
								<CountrySelector/>

								<LocaleSelector/>

								<CurrencySelector className={navLink}/>

								<a href="#" className={cx(COMMON_STYLES_EMOTION.LINK, navLink)}>
									<IsTabletOrDesktop>
										Help
									</IsTabletOrDesktop>
								</a>
							</Nav>
						</NavContainer>

						<NavUser>
							{AuthStore.store.state.authorized ? (
								<NavLink
									to={PATHS.PERSONAL}
									className={cx(userLink)}
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

									<IsTabletOrDesktop>
										{AuthStore.store.state.profile.name}
									</IsTabletOrDesktop>
								</NavLink>
							) : (
								<NavLink to={PATHS.AUTH_SIGN_UP} className={userLink}>
									<IsPhone>
										<Ionicon
											icon="md-person"
											fontSize="14px"
											color={COLORS.BLACK.toString()}
										/>
									</IsPhone>

									<IsTabletOrDesktop>
										Sign up
									</IsTabletOrDesktop>
								</NavLink>
							)}

							<NavLink
								to={PATHS.HOME}
								className={cx(userLink)}
							>
								<Icon
									icon={EIcon.Favorite}
									type={EIconType.TwoTone}
									size={18}
									color={COLORS.RED}
									className={icon}
								/>

								<IsDesktop>
									Favorites
								</IsDesktop>
							</NavLink>

							<NavLink
								to={PATHS.PERSONAL_PLACE_ADVERT}
								className={cx(userLink, placeAdvert)}
							>
								<IsPhone>
									<PlaceAdvertIcon>
										<Ionicon
											icon="md-add"
											fontSize="18px"
											color={COLORS.WHITE.toString()}
										/>
									</PlaceAdvertIcon>
								</IsPhone>

								<IsTabletOrDesktop>
									Place advert
								</IsTabletOrDesktop>
							</NavLink>
						</NavUser>
					</Layout>
				</HeaderContainer>

				<FiltersContainer isFloating={isFloating}>
					<Layout>
						<Filters/>
					</Layout>
				</FiltersContainer>
			</Container>
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

interface IFloatingProps {
	isFloating: boolean;
}

const logo = css`
  background-image: url(${require('../../../img/logos/realthub-color.svg')});
	background-position: 0 50%;
	background-size: auto 35px;
	background-repeat: no-repeat;
	width: 132px;
	min-width: 132px;
	height: ${THEME.HEADER_HEIGHT}px;
	display: block;
	flex-grow: 0;
	top: -1px;
	will-change: transform;
	transition: transform .3s;
	transform-origin: 0 50%;
	margin-right: ${THEME.SECTION_PADDING_H}px;
	
	${mq.phone} {
		width: 34px;
		min-width: 34px;
		margin-right: ${THEME.SECTION_PADDING_H}px;
	}
`;

const navLink = css`
  margin-right: ${THEME.SECTION_PADDING_H}px;
	display: flex;
	justify-content: flex-start;
	position: relative;
	white-space: nowrap;
	
	${mq.phone} {
  	display: block;
		padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
		border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
		transition: background-color .2s;

		&:hover {
			background-color: ${COLORS.GRAY_DARK.toString()};
		}
  }
`;

const userLink = css`
	${COMMON_STYLES_EMOTION.LINK};
	margin-left: ${THEME.SECTION_PADDING_H}px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	white-space: nowrap;
	
	${mq.phone} {
		margin-left: ${THEME.SECTION_PADDING_H / 1.5}px;
	}
`;

const placeAdvert = css`
	color: ${COLORS.WHITE.toString()};
	background-color: ${COLORS.BLUE.toString()};
	padding: 5px 8px;
	border-radius: 4px;
	font-size: ${THEME.FONT_SIZE_SMALL}px;
	font-weight: 600;
	text-transform: uppercase;
	transition: background-color .2s;

	&:link {
		color: ${COLORS.WHITE.toString()};
	}

	&:visited {
		color: ${COLORS.WHITE.toString()};
	}

	&:hover {
		color: ${COLORS.WHITE.toString()};
		background-color: ${COLORS.BLUE.alpha(0.9).toString()};
	}

	&:active {
		color: ${COLORS.WHITE.toString()};
	}
`;

const block = css`
	background-color: ${COLORS.WHITE.toString()};
  min-height: ${THEME.HEADER_HEIGHT}px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const icon = css`
  margin-right: ${THEME.SECTION_PADDING_H / 2}px;
  
  ${mq.phoneOrTablet} {
  	margin-right: 0;
  }
`;

const PlaceAdvertIcon = styled('span')`
  display: flex;
	align-items: center;
`;

const Container = styled('header')`
  padding-top: ${THEME.HEADER_HEIGHT}px;
`;

const HeaderContainer = styled('div')<IFloatingProps>`
  background-color: ${COLORS.WHITE.toString()};
	z-index: 10;
	width: 100%;
	left: 0;
	top: 0;
	max-width: 100%;
	position: fixed;
	display: flex;
	flex-direction: column;
	transition: box-shadow .3s;
	
	${(props: IFloatingProps) => {
		if(props.isFloating) {
			return css`
				box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL};
			`;
		}
	}}
`;

const Nav = styled('nav')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	font-weight: 600;
	text-transform: uppercase;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavUser = styled('nav')`
  display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: ${THEME.FONT_SIZE_SMALL}px;
	font-weight: 600;
	text-transform: uppercase;
	
	${mq.phoneOrTablet} {
		flex-grow: 1;
	}
`;

const FiltersContainer = styled('div')<IFloatingProps>`
	${block};
	background-color: ${COLORS.WHITE.toString()};
	border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL};
	transition: box-shadow .3s;
	
	${(props: IFloatingProps) => {
		if (props.isFloating) {
			return css`
				box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL};
			`;
		}
	}}
`;

const NavContainer = styled('div')`
  flex-grow: 1;
`;