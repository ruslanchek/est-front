import * as React from 'react';
import styled, { css } from 'react-emotion';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { Favorite } from '../ui/Favorite';
import { COLORS, THEME } from '../../theme';
import { ObjectSubtitle } from '../ui/ObjectSubtitle';
import { Address } from '../ui/Address';
import { GallerySmall } from '../ui/GallerySmall';
import { Params } from '../ui/Params';
import { Avatar } from '../ui/Avatar';
import { Link } from 'react-router-dom';
import { PATHS } from '../../config';
import { Money } from '../ui/Money';
import IObject = ObjectsStore.IObject;

interface IProps {
	objectData: IObject;
	className: string;
}

export class ObjectInList extends React.Component<IProps, {}> {
	public render() {
		const {
			objectData,
		} = this.props;

		const {
			id,
			isFavorite,
			price,
			agent,
		} = this.props.objectData;

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

					<Link to={PATHS.OBJECT.replace(':id', id.toString())}>
						<GallerySmall objectData={objectData}/>
					</Link>
				</Header>

				<Body>
				<ObjectSubtitle objectData={objectData}/>

				<Price>
					<Money value={price}/>
				</Price>

				<AddressContainer>
					<Address objectData={objectData}/>
				</AddressContainer>
				</Body>

				<ParamsContainer>
					<Params objectData={objectData}/>
				</ParamsContainer>

				<Footer>
					<Avatar objectAgent={agent}/>
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
