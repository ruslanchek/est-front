import * as React from 'react';
import styled, { css } from 'react-emotion';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { Favorite } from '../ui/Favorite';
import { COLORS, THEME } from '../../theme';
import { AdvertSubtitle } from '../ui/AdvertSubtitle';
import { Address } from '../ui/Address';
import { GallerySmall } from '../ui/GallerySmall';
import { Params } from '../ui/Params';
import { Avatar } from '../ui/Avatar';
import { Link } from 'react-router-dom';
import { PATHS } from '../../config';
import { Money } from '../ui/Money';
import IAdvert = AdvertsStore.IAdvert;

interface IProps {
	advertData: IAdvert;
	className: string;
}

export class AdvertListItem extends React.Component<IProps, {}> {
	public render() {
		const {
			advertData,
		} = this.props;

		const {
			id,
			isFavorite,
			price,
			agent,
		} = this.props.advertData;

		return (
			<Container className={this.props.className}>
				<Header>
					<FavoriteContainer>
						<Favorite
							id={id}
							title={'xxxx'}
							isFavorite={isFavorite}
						/>
					</FavoriteContainer>

					<Link to={PATHS.ADVERT.replace(':id', id.toString())}>
						<GallerySmall advertData={advertData}/>
					</Link>
				</Header>

				<Body>
				<AdvertSubtitle advertData={advertData}/>

				<Price>
					<Money value={price}/>
				</Price>

				<AddressContainer>
					<Address advertData={advertData}/>
				</AddressContainer>
				</Body>

				<ParamsContainer>
					<Params advertData={advertData}/>
				</ParamsContainer>

				<Footer>
					<Avatar advertAgent={agent}/>
				</Footer>
			</Container>
		);
	}
}

const Container = styled('section')`
	border-radius: 6px;
	position: relative;
	overflow: hidden;
	background-color: ${COLORS.WHITE.toString()};
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_1};
	display: flex;
	flex-direction: column;
`;

const Header = styled('header')`
	position: relative;
`;

const FavoriteContainer = styled('div')`
	position: absolute;
	top: ${THEME.SECTION_PADDING_V}px;
	right: ${THEME.SECTION_PADDING_H}px;
	z-index: 2;
`;

const Body = styled('div')`
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	flex-grow: 1;
`;

const Price = styled('div')`
	font-size: ${THEME.FONT_SIZE_H1}px;
	margin: 0.25em 0;
`;

const AddressContainer = styled('div')`
	color: ${COLORS.BLACK_LIGHT.toString()};
	font-size: ${THEME.FONT_SIZE_SMALL}px;
`;

const ParamsContainer = styled('div')`
	padding: ${THEME.SECTION_PADDING_V / 2}px ${THEME.SECTION_PADDING_H}px;
	border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
`;

const Footer = styled('footer')`
	background-color: ${COLORS.GRAY_DARK.toString()};
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
`;
